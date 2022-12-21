import { connectionDB } from "../database/db.js"
import { v4 as uuidV4 } from "uuid";
import bcrypt from "bcrypt";

async function register(req, res) {
    const user = req.body;
    const { name, email, password, confirassword } = req.body;

    const hashPassword = bcrypt.hashSync(password, 10);

    try {

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
    const user = req.body;
    const { email, password } = req.body;
    const token = uuidV4();
    
    try {
        const userExists = await connectionDB.query('SELECT * FROM users WHERE email=$1;',
        [email]
    );
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
        res.sendStatus(500);
    }
};

export {
    register,
    login
};