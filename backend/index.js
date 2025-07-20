import express from "express";
import cors from "cors";

const app = express();
const PORT = 8000;

app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true
}));
app.use(express.json());

// In-memory users
let users = [];

// Check server running
app.get("/", (req, res) => {
    res.send("Netflix Clone Backend running 🚀");
});

// Sign Up route
app.post("/signup", (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ success: false, message: "All fields are required." });
    }
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        return res.status(400).json({ success: false, message: "User already exists" });
    }
    users.push({ email, password });
    console.log(users); // for debug
    return res.status(201).json({ success: true, message: "User created successfully" });
});

// Login route
app.post("/login", (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ success: false, message: "All fields are required." });
    }
    const user = users.find(user => user.email === email);
    if (!user) {
        return res.status(404).json({ success: false, message: "Account not found. Please sign up." });
    }
    if (user.password !== password) {
        return res.status(401).json({ success: false, message: "Invalid password" });
    }
    return res.status(200).json({ success: true, message: "Login successful" });
});

app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
