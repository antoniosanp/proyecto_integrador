import { Router } from "express";
import passengersRoutes from "./passengers.routes.js";
import driversRoutes from "./drivers.routes.js"
import authRoutes from "./auth.routes.js"

const router = Router();

router.use("/passengers", passengersRoutes);
router.use("/drivers",driversRoutes)
router.use("/auth",authRoutes)

export default router;