const express = require("express");
const jsonTest = require("./data/jsonTest");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");

const app = express();
dotenv.config();
connectDB();
app.use(express.json());


app.get("/", (req, res) => {
  res.send("API is running...");
});

app.get("/api/restaurantes", (req, res) => {
  res.json(jsonTest);
});

app.use('/api/users', userRoutes)

app.use(notFound);
app.use(errorHandler);

/*app.get("/api/restaurantes/:id", (req, res) => {
  const element = jsonTest.find((n) => n._id === req.params.id);
  res.send(element);
});*/

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on PORT ${PORT}`));
