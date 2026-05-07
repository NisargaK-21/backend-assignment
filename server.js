const express = require("express");
const roleMiddleware = require("./middleware/roleMiddleware");
const authMiddleware = require("./middleware/authMiddleware");
const prescriptionRoutes = require("./routes/prescriptionRoutes");
const app = express();

require("./database/initDB");

const authRoutes = require("./routes/authRoutes");

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/prescriptions", prescriptionRoutes);

app.get("/", (req, res) => {
    res.send("HealthTech API Running");
});

// app.get("/protected", authMiddleware, (req, res) => {

//     res.json({
//         message: "Protected route accessed",
//         user: req.user
//     });
// });

// app.get(
//     "/doctor-only",
//     authMiddleware,
//     roleMiddleware("doctor"),
//     (req, res) => {

//         res.json({
//             message: "Welcome Doctor"
//         });
//     }
// );

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});