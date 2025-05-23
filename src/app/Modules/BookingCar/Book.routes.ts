

import express from "express";
import { BookingControllers} from "./Book.controllers";



const router = express.Router();

router.post("/book-add", BookingControllers.addBookingCar); 
router.patch("/book-approved/:id", BookingControllers.approvedBookingCar); 
router.patch("/book-canceled/:id", BookingControllers.canceledBookingCar); 
router.patch("/book-completed/:id", BookingControllers.completeBookingCar); 
router.patch("/book-update/:id", BookingControllers.updateBookingCar); 
router.get("/book-all-user/:id", BookingControllers.getAllUserBookingCars); 
router.get("/book-all-owner/:id", BookingControllers.getAllOwnerBookingCars); 

router.delete("/book-delete/:id", BookingControllers.deleteBookingCar); 

router.post("/create-payment", BookingControllers.createPaymentBooking); 

export const BookingRoutes = router;
