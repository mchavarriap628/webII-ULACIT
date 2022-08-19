const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
//const jsonTest = require("./data/jsonTest");

const { notFound, errorHandler } = require("./middlewares/errorMiddleware");

const userRoutes = require("./routes/userRoutes");
const restauranteRoutes = require("./routes/restauranteRoutes");

const app = express();
dotenv.config();
connectDB();
app.use(express.json());


app.get("/", (req, res) => {
  res.send("API is running...");
});



app.use('/api/users', userRoutes);
app.use('/api/restaurantes', restauranteRoutes);

app.use(notFound);
app.use(errorHandler);

/*
app.get("/api/restaurantes/:id", (req, res) => {
  const element = jsonTest.find((n) => n._id === req.params.id);
  res.send(element);
});

app.get("/api/restaurantes", (req, res) => {
  res.json(jsonTest);
});
*/

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on PORT ${PORT}`));
