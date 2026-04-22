import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import contactRoutes from "./routes/contactRoutes.ts";
import adminRoutes from "./routes/adminRoutes.ts";
import offerRoutes from "./routes/offerRoutes.ts";

const app = express();

app.use(cors());
app.use(express.json());

// API Routes
app.use("/api", contactRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/offer", offerRoutes);

// Serve Static Frontend in Production
if (process.env.NODE_ENV === "production" || process.env.VERCEL) {
  const clientDistPath = path.join(__dirname, "../client/dist");
  app.use(express.static(clientDistPath));
  
  // SPA support: redirect all other routes to index.html
  app.get("*", (req, res) => {
    res.sendFile(path.join(clientDistPath, "index.html"));
  });
}

const PORT = Number(process.env.PORT) || 5000;

// Only listen if not running as a Vercel serverless function
if (process.env.NODE_ENV !== "production" || !process.env.VERCEL) {
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

export default app;
