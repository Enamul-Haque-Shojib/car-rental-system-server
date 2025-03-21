

import express from "express";
import { CarControllers } from "./Car.controllers";



const router = express.Router();

router.post("/car-add", CarControllers.addCar); 
router.patch("/car-update/:id", CarControllers.updateCar); 
router.get("/", CarControllers.getAllCars); 
router.get("/car-one/:id", CarControllers.getOneCar); 
router.delete("/car-delete/:id", CarControllers.deleteCar); 

export const CarRoutes = router;
