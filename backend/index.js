import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./config/db.js";
import userRouter from "./routes/userRouters.js";
import doctorRouter from "./routes/doctorRoute.js";
import appoinmentRouter from "./routes/appoinmentRoute.js";

// Load environment variables
dotenv.config();

const app = express();

// ✅ Allowed CORS Origins
const allowedOrigins = [
  process.env.FRONTEND_URL,
  process.env.ADMIN_URL,
];

// ✅ CORS Middleware
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not Allowed By CORS"));
      }
    },
    methods: ["GET", "PUT", "POST", "DELETE"],
    credentials: true,
  })
);





// ✅ Body parsers
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ✅ Database Connection
connectDb();

// ✅ Sample route (for testing)
app.get("/", (req, res) => {
  res.send("🚀 Server is running successfully!");
});

app.use("/api/user",userRouter)
// doctor routes here
app.use("/api/doctor",doctorRouter)
// appoinment routes here
app.use("/api/appoinment",appoinmentRouter)
// ✅ Start server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`🌐 Server running at: http://localhost:${port}`);
});
