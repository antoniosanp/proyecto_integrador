import { Router } from "express";
import passengersRoutes from "./passengers.routes.js";
import driversRoutes from "./drivers.routes.js"

const router = Router();

router.use("/passengers", passengersRoutes);
router.use("/drivers",driversRoutes)

export default router;