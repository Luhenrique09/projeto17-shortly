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

async function findUsers(req, res) {
    const idUserOn = res.locals.session;

    try {
        const name = await connectionDB.query('SELECT name FROM users WHERE id=$1',
         [idUserOn]);

        const visitCount = await connectionDB.query('SELECT SUM(amount) FROM links WHERE "userId"=$1;',
         [idUserOn]);
        
        const userMe = await connectionDB.query(
            `SELECT links.id AS "ulrId",
             links."shortlyLink", links.link AS url,
              links.amount AS "visitCount" FROM links JOIN users ON links."userId" = users.id  WHERE links."userId" = $1;`,
               [idUserOn]); 
        
        if(!userMe.rows){
            return res.status(404);
        }
       
        const userUrls = {
            id: idUserOn,
            name: name.rows[0].name,
            visitCount: Number(visitCount.rows[0].sum),
            shortenedUrls: userMe.rows
        }

        res.send(userUrls);

    } catch (err) {
        res.status(500).send(err.message);
    }
};

async function ranking(req, res){
  
    try {
        const {rows} = await connectionDB.query(`SELECT users.id, users.name,
         COUNT(links.link) AS "linkCount",
          COALESCE(SUM(links.amount),0) AS "visitCount" 
          FROM users LEFT JOIN links ON links."userId" = users.id 
          GROUP BY users.id ORDER BY "visitCount" DESC, "linkCount" DESC LIMIT 10;`);
       
        res.send(rows);

    } catch (err) {
        res.status(500).send(err.message);
    }
};

export {
    register,
    login,
    findUsers,
    ranking
};