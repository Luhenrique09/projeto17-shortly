import { connectionDB } from "../database/db.js"
import { v4 as uuidV4 } from "uuid";
import bcrypt from "bcrypt";

async function register(req, res) {
    const { name, email, password, confirmPassword } = req.body;

    const hashPassword = bcrypt.hashSync(password, 10);

    try {
        if (password !== confirmPassword) {
            return res.status(422).send("Senhas incompatíveis!")
        }

        const userExists = await connectionDB.query('SELECT email FROM users WHERE email=$1;',
            [email]
        );

        if (userExists.rows[0]) {
            return res.status(409).send({ message: "Esse email já existe" })
        }

        await connectionDB.query(
            'INSERT INTO users (name, email, password ) VALUES ($1, $2, $3);',
            [name, email, hashPassword]
        );

        res.sendStatus(201)
    } catch (err) {
        res.sendStatus(422)
        console.log(err)
    }

};

async function login(req, res) {
    const { email, password } = req.body;
    let token = uuidV4();

    try {
        const userExists = await connectionDB.query('SELECT * FROM users WHERE email=$1;',
            [email]
        );
        if (!userExists.rows[0]) {
            return res.status(401).send("Email não existem!")
        }

        const rightPassword = bcrypt.compareSync(password, userExists.rows[0].password);
        if (!rightPassword) {
            return res.status(401).send("Senha incorreta!")
        }
       const idUser = userExists.rows[0].id.toString();
        
        await connectionDB.query(
            'INSERT INTO sessions ( "userId", token ) VALUES ($1, $2);',
            [idUser, token]
        );

        const userOn = {
            name: userExists.rows[0].name,
            token,
        }

        res.send(userOn);

    } catch (err) {
        console.log(err)
        res.sendStatus(422);
    }
};

export {
    register,
    login
};