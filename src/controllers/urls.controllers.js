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

async function findById(req, res) {
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

async function findShortUrl(req, res) {
    const { shortUrl } = req.params;

    try {
        const { rows } = await connectionDB.query(
            'SELECT * FROM links WHERE "shortlyLink"=$1;',
            [shortUrl]
        );

        if (rows.length === 0) {
            return res.status(404).send("Esse link não existe!");
        };
        const amount = rows[0].amount + 1;

        await connectionDB.query('UPDATE links SET amount=$1 WHERE "shortlyLink"=$2;',
            [amount, shortUrl]);

        res.redirect(rows[0].link);

    } catch (err) {
        res.status(500).send(err.message);
        console.log(err)
    };
};

async function removeLink(req, res) {
    const { id } = req.params;
    const idUserOn = res.locals.session;
    
    try {
        const links = await connectionDB.query('SELECT * FROM links WHERE id=$1;', [id]);
       
        if (links.rows.length === 0) {
            return res.status(404).send("Link não existe!")
        }

        if (links.rows[0].userId !== idUserOn) {
            return res.status(401).send("Esse link não pertence ao usuario logando!");
        }

        await connectionDB.query("DELETE  FROM links WHERE id=$1",
            [id]);

        res.sendStatus(200);
    } catch (err) {
        res.status(500).send(err.message);
    }

};

export {
    create,
    findById,
    findShortUrl,
    removeLink
};