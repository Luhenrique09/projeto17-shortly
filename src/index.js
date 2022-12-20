import express from "express";
import pkg from "pg";

import { v4 as uuid } from "uuid";
import bcrypt from "bcrypt"

const { Pool } = pkg;
const connection = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: '1234',
    database: 'shortly'
});
const app = express();
app.use(express.json())

app.post('/signup', async (req, res) => {
    const { name, email, password, confirmPassword } = req.body;

    const hashPassword = bcrypt.hashSync(password, 10);

    try {
       const userExists = await connection.query("SELECT email FROM users WHERE email=$1;", 
            [email]
        );
      
         if (userExists.rows[0]) {
            return res.status(409).send({ message: "Esse email já existe" })
        }  
         
        await connection.query(
            "INSERT INTO users (name, email, password ) VALUES ($1, $2, $3)",
            [name, email, hashPassword]
        );

        res.sendStatus(201)
    } catch (err) {
        res.sendStatus(422)
    
    }

});


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server runnign in port ${port}`));