import express from "express";
import { handleContactForm } from "../controllers/contactController.ts";

const router = express.Router();

router.post("/contact", handleContactForm);

export default router;
