import { connectionDB } from "../database/db.js";

export async function auth(req, res, next) {
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
