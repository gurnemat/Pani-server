const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const connectDB = require("./mongodb/connect");
const orderRouter = require("./routes/order.routes");

dotenv.config();

const app = express();
app.use(express.json({ limit: "50mb" }));

app.use(cors({
    "origin": "*",
}));


app.get("/", (req, res) => {
    res.send({ message: "Hello Welcome to Happy Water API!" });
});

app.use("/api/orders", orderRouter);


const startServer = async () => {
    try {
        connectDB(process.env.MONGODB_URL);

        app.listen(8000, () =>
            console.log("Server started on port http://localhost:8000"),
        );
    } catch (error) {
        console.log(error);
    }
};

startServer();