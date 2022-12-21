import { nanoid } from "nanoid";
import { connectionDB } from "../database/db.js"

async function create(req, res) {
    const { url } = req.body;
    const shortUrl = nanoid(8);
    const session = res.locals.session;

    try {

        await connectionDB.query(
            'INSERT INTO links ("userId", link, "shortlyLink" ) VALUES ($1, $2, $3);',
            [session, url, shortUrl]
        );

        res.status(201).send({ shortUrl });

    } catch (err) {
        res.status(500).send(err.message);
    }

}

async function findById (req, res){
    const { id } = req.params;

    try {
        const { rows } = await connectionDB.query(
          "SELECT * FROM links WHERE id=$1;",
          [id]
        );
    
        if (rows.length === 0) {
          res.status(404).send("Não existe nenhum link com esse id");
        };
     
        const linkRes = {
            id: rows[0].id,
            shortUrl: rows[0].shortlyLink,
            url: rows[0].link
        };

        res.status(200).send(linkRes);
        
      } catch (err) {
        res.status(500).send(err.message);
      };
};

export {
    create,
    findById
};