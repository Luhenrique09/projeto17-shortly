import { connectionDB } from "../database/db.js";
import { urlShortenSchema } from "../models/urls.model.js";

export async function validSchemaUrls(req, res, next) {
    const  url  = req.body;

    const { error } = urlShortenSchema.validate(url, { abortEarly: false })
    
        if (error) {
            const errors = error.details.map((detail) => detail.message)
            return res.status(422).send(errors)
        }

    const { authorization } = req.headers;
    const token = authorization?.replace("Bearer ", "");

    const session = await connectionDB.query('SELECT * FROM sessions WHERE token = $1;',
        [token]);
    if (!session.rows[0]) {
        return res.status(401).send("Não autorizado!");
    }

   
    res.locals.session = session.rows[0].userId;

    next();
};
