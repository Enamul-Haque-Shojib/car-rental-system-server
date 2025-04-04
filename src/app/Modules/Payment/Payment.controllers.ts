import { NextFunction, Request, Response } from "express";
import { PaymentServices } from "./Payment.Services";



 const addPayment = async (req: Request, res: Response, next: NextFunction) => {
  
  try {
    
    const result = await PaymentServices.addPaymentIntoDB(req.body);

    res.status(200).json({
      success: true,
      message: "Payment successfully.",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};



 
 const getAllOwnerPayments = async (req: Request, res: Response, next: NextFunction) => {

  try {
    
    const result = await PaymentServices.getAllOwnerPaymentsIntoDB(req.params.id);

    res.status(200).json({
      success: true,
      message: "All Owner Payment retrieve successfully.",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

 const deletePayment = async (req: Request, res: Response, next: NextFunction) => {
  
  try {
    
    const result = await PaymentServices.deletePaymentIntoDB(req.params.id);

    res.status(200).json({
      success: true,
      message: "One payment deleted successfully.",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};



export const PaymentControllers = {
  addPayment,
  getAllOwnerPayments,
  deletePayment
}