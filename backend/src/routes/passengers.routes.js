import { Router } from "express";

import { getPassengers, createPassenger } from "../controllers/passengers.controller.js";

const router = Router();

// GET /api/passengers
router.get("/",getPassengers)

// POST /api/passengers
router.post("/",createPassenger)

export default router;