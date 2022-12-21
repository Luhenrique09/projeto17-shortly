import express from "express";
import usersRoutes from "./routes/users.routes.js";
import urlsRoutes from "./routes/urls.routes.js"

const app = express();
app.use(express.json());
app.use(usersRoutes);
app.use(urlsRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server runnign in port ${port}`));