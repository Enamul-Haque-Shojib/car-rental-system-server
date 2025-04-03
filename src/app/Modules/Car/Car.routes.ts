

import express from "express";
import { CarControllers } from "./Car.controllers";



const router = express.Router();

router.post("/car-add", CarControllers.addCar); 
router.patch("/car-update/:id", CarControllers.updateCar); 
router.post("/query", CarControllers.getAllQueryCars); 
router.get("/", CarControllers.getAllCars); 
router.get("/car-one/:id", CarControllers.getOneCar); 
router.delete("/car-delete/:id", CarControllers.deleteCar); 

router.patch(
    '/review-add/:id',
    CarControllers.addCarReview,
  );
  router.get(
    '/get-reviews',
    CarControllers.getAllCarReviews,
  );
  
  router.get(
    '/get-reviews/:id',
    CarControllers.getSingleCarReviews,
  );

export const CarRoutes = router;
