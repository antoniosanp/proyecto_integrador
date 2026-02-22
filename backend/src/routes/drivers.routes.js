import { Router } from "express";
import { getDrivers, createDriver } from "../controllers/drivers.controller.js";

const router = Router();
router.get("/",getDrivers);
router.post("/",createDriver)


export default router