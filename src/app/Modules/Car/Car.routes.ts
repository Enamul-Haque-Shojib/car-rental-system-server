

import express from "express";
import { CarControllers } from "./Car.controllers";



const router = express.Router();

router.post("/car-add", CarControllers.addCar); 
router.post("/car-update/:id", CarControllers.updateCar); 
router.post("/", CarControllers.getAllCars); 
router.post("/car-one/:id", CarControllers.getOneCar); 
router.post("/car-delete", CarControllers.deleteCar); 

export const CarRoutes = router;
