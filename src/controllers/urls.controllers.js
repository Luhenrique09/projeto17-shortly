import { nanoid } from "nanoid";
import { connectionDB } from "../database/db.js"

async function create(req, res) {
    const { url } = req.body;
    const shortUrl = nanoid(8);
    const { authorization } = req.headers;
    const token = authorization?.replace("Bearer ", "");

    try {
        const session = await connectionDB.query('SELECT * FROM sessions WHERE token = $1;',
            [token]);
        if (!session.rows[0]) {
            return res.status(401).send("Não autorizado");
        }
    
         const urlExist = await connectionDB.query('SELECT * FROM links WHERE link = $1;',
         [url]);
        
         if(!urlExist.rows[0]){
            await connectionDB.query(
                'INSERT INTO links ("userId", link, "shortlyLink" ) VALUES ($1, $2, $3);',
                [session.rows[0].userId, url, shortUrl]
            );
           
         } else {
            return res.status(409).send("link já existe");
         }
        
        res.send({shortUrl}).status(201);

    } catch (err) {
        res.status(500).send(err.message)
        console.log(err)
    }
}


export {
    create
}