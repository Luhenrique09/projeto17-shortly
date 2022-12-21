import { loginSchema, registerSchema } from "../models/users.model.js";
import { connectionDB } from "../database/db.js";
import bcrypt from "bcrypt";

export async function validSchemaUsersRegister(req, res, next){
    const user = req.body;
    const { error } = registerSchema.validate(user, { abortEarly: false })
    
        if (error) {
            const errors = error.details.map((detail) => detail.message)
            return res.status(422).send(errors)
        }

        if (user.password !== user.confirmPassword) {
            return res.status(422).send("Senhas incompatíveis!")
        }

        const userExists = await connectionDB.query('SELECT email FROM users WHERE email=$1;',
            [user.email]
        );

        if (userExists.rows[0]) {
            return res.status(409).send({ message: "Esse email já existe" })
        }
        
        next();
};

export async function validSchemaUsersLogin(req, res, next){
    const user = req.body;
    const { error } = loginSchema.validate(user, { abortEarly: false })

        if (error) {
            const errors = error.details.map((detail) => detail.message)
            return res.status(422).send(errors)
        }

        const userExists = await connectionDB.query('SELECT * FROM users WHERE email=$1;',
            [user.email]
        );


        if (!userExists.rows[0]) {
            return res.status(401).send("Email não existem!")
        }

        const rightPassword = bcrypt.compareSync(user.password, userExists.rows[0].password);
        if (!rightPassword) {
            return res.status(401).send("Senha incorreta!")
        }
       
        

        res.locals.userExists = userExists;
        next();
};