const express = require("express");
const app = express();
const connectDB = require("./config/db");
const path = require("path");

// Import My Routes
const usersRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const contactsRoutes = require("./routes/contacts");

// DB Connection
connectDB();

// Middlewares
app.use(express.json({ extended: false }));

// My Routes
app.use("/api", usersRoutes);
app.use("/api", authRoutes);
app.use("/api", contactsRoutes);

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

// PORT
const PORT = process.env.PORT || 5000;

// Starting the Server
app.listen(PORT, () => console.log(`Server is Up and Running on port ${PORT}`));
