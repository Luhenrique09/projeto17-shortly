import express from "express";
import usersRoutes from "./routes/users.routes.js";

const app = express();
app.use(express.json())
app.use(usersRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server runnign in port ${port}`));