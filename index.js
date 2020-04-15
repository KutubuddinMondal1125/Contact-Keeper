const express = require("express");
const app = express();

// Import My Routes
const usersRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const contactsRoutes = require("./routes/contacts");

// My Routes
app.use("/api", usersRoutes);
app.use("/api", authRoutes);
app.use("/api", contactsRoutes);

// PORT
const PORT = process.env.PORT || 5000;

// Starting the Server
app.listen(PORT, () => console.log(`Server is Up and Running on port ${PORT}`));
