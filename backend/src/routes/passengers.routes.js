import { Router } from "express";

import { getPassengers } from "../controllers/passengers.controller.js";

const router = Router();

// GET /api/passengers
router.get("/",getPassengers)

// POST /api/passengers
router.post("/", (req, res) => {
  res.json({ message: "Crear pasajero" });
});

export default router;