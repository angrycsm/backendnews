import express from "express";
import userRoute from "./src/routes/user.route.js";
import dotenv from "dotenv"
import connectDB from "./src/database/db.js"

const port = 3000;
const app = express();

dotenv.config();
connectDB()
app.use(express.json());
app.use("/user", userRoute);

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
