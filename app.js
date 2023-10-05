import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/database/db.js";

import userRoute from "./src/routes/user.route.js";
import authRoute from "./src/routes/auth.route.js";

dotenv.config();

const port = 3000;
const app = express();

connectDB();
app.use(express.json());
app.use("/user", userRoute);
app.use("/auth", authRoute);

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
