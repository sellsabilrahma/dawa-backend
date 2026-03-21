import express from "express";
import cors from "cors";
import { config } from "dotenv";
import connectDB from "./DBconnect.js";
import pharmacieRouter from "./pharmacieRouter.js";

config();

const app = express();

const port = process.env.PORT || 3000;


connectDB(process.env.MONGO_URI);

app.use(express.json());
app.use(cors());

app.use("/api", pharmacieRouter);

app.get('/', (req, res) => {
    res.send("API IS WORKING");
});

app.listen(port, () => console.log(`Server started on port ${port}`));
