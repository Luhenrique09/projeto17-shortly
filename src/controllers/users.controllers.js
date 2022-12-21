import { connectionDB } from "../database/db.js"
import { v4 as uuidV4 } from "uuid";
import bcrypt from "bcrypt";

async function register(req, res) {
    const { name, email, password } = req.body;

    const hashPassword = bcrypt.hashSync(password, 10);

    try {
        await connectionDB.query(
            'INSERT INTO users (name, email, password ) VALUES ($1, $2, $3);',
            [name, email, hashPassword]
        );

        res.sendStatus(201);
    } catch (err) {
        res.status(500).send(err.message);
    }

};

async function login(req, res) {
    const user = req.body;
    const { email, password } = req.body;
    const token = uuidV4();
    const userExists = res.locals.userExists;
    const idUser = userExists.rows[0].id.toString();
    try {
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
        res.status(500).send(err.message);
    }
};

export {
    register,
    login
};