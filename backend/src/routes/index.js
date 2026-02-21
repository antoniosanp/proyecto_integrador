import { Router } from "express";
import passengersRoutes from "./passengers.routes.js";

const router = Router();

router.use("/passengers", passengersRoutes);

export default router;