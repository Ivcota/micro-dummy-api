const express = require("express");
const dotenv = require("dotenv");
const postsRoutes = require("./routes/posts");

// dotenv
dotenv.config({ path: "./config/config.env" });

// Server
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Mount Routes
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    routes: {
      posts: {
        base: "/api/v1/posts",
        options: 'GET, POST'
      }
    },
  });
});
// ===posts===
app.use("/api/v1/posts", postsRoutes);

// Listen
app.listen(
  PORT,
  console.log(
    `Server is running on port: ${PORT} in ${process.env.NODE_ENV} mode.`
  )
);