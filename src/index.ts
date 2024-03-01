import express from "express";
import morgan from "morgan";
import cors from "cors";

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cors());
app.use('/favicon.ico', express.static('public/favicon.ico'));

app.listen(port, () => {
    console.log("Server is running on http://localhost:3000");
});

app.get("/", (req, res) => {
    res.send("Hello World");
});