const express = require("express");
const sequelize = require("./db/dbConnection");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const userRoute = require("./routes/userRoute");
const productRoute = require("./routes/productRoute");
const categoryRoute = require("./routes/categoryRoute");
const ratingRoute = require("./routes/ratingRouter");
const authRoute = require("./routes/authRoute");

const app = express();

//db connection
sequelize
  .authenticate()
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.error("Error connecting to DB:", err));


// import ur model in starter point of ur app sync models with the database
const User = require("./models/User");
const Product = require("./models/Product");
const Category = require("./models/Category");
const Rating = require("./models/Rating");

(async () => {
  try {
    await sequelize.sync(); // set force to true to drop existing tables
    console.log("Database tables created successfully");
  } catch (error) {
    console.error("Error syncing database:", error);
  }
})();



//middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
const allowedOrigins = [
  "https://e-commerce-mern-stack-topaz.vercel.app",
  "https://another-allowed-origin.com",
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like mobile apps or curl)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.use(cookieParser());
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

//routes
app.use("/users", userRoute);
app.use("/products", productRoute);
app.use("/categories", categoryRoute);
app.use("/ratings", ratingRoute);
app.use("/auth", authRoute);

module.exports = app;