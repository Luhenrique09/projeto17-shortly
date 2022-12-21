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

export {
    create
}