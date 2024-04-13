const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const app = express();

// Serve static files from the 'dist' directory
app.use(express.static(path.join(__dirname, "../dist")));

// Parse incoming request bodies as JSON
app.use(bodyParser.json());

// Dummy database for storing users (replace this with your database logic)
const users = [];

// Route for user registration
app.post("/register", async (req, res) => {
  try {
    const { first_name, last_name, email, password } = req.body;

    // Hash the password before saving it
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save user data (you may want to store this in a database)
    users.push({
      first_name,
      last_name,
      email,
      password: hashedPassword, // Store hashed password
    });

    res.status(200).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Route for user login
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email (replace this with your database query)
    const user = users.find((user) => user.email === email);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Compare passwords
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Generate JWT token
    const token = jwt.sign({ email: user.email }, 'd253c110f1b87b2d01da4bac19bcbeb6c1c43a8dade0116edd6e6657f4d4d272', {
      expiresIn: "1h", // Token expires in 1 hour
    });

    res.status(200).json({ token });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Route to get user data based on the JWT token
app.get("/user", authenticateToken, (req, res) => {
  // The user data is available in the request object, added during authentication
  res.status(200).json({ user: req.user });
});

// Middleware to authenticate JWT token
function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  jwt.verify(token, 'd253c110f1b87b2d01da4bac19bcbeb6c1c43a8dade0116edd6e6657f4d4d272', (err, user) => {
    if (err) {
      return res.status(403).json({ error: "Forbidden" });
    }
    req.user = user; // Add user data to the request object
    next();
  });
}

// Route to serve Home.vue when '/home' is accessed
app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/Home.vue"));
});

// Fallback route to serve the index.html file
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
