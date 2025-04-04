

import express from "express";
import { PaymentControllers } from "./Payment.controllers";




const router = express.Router();

router.post("/payment-add", PaymentControllers.addPayment); 
   
router.get("/payment-all-owner/:id", PaymentControllers.getAllOwnerPayments); 

router.delete("/payment-delete/:id", PaymentControllers.deletePayment); 



export const paymentRoutes = router;
