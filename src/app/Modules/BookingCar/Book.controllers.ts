import { NextFunction, Request, Response } from "express";
import { BookingServices } from "./Book.Services";



 const addBookingCar = async (req: Request, res: Response, next: NextFunction) => {
  
  try {
    
    const result = await BookingServices.addBookingCarIntoDB(req.body);

    res.status(200).json({
      success: true,
      message: "Car Booked successfully.",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
 const approvedBookingCar = async (req: Request, res: Response, next: NextFunction) => {

  try {
    
    const result = await BookingServices.approvedBookingCarIntoDB(req.params.id, req.body);

    res.status(200).json({
      success: true,
      message: "Car Book approved successfully. Sending Confirmation email, Please check your email",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
 const canceledBookingCar = async (req: Request, res: Response, next: NextFunction) => {
  
  try {
    
    const result = await BookingServices.canceledBookingCarIntoDB(req.params.id);

    res.status(200).json({
      success: true,
      message: "Car Book canceled successfully.",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
 const updateBookingCar = async (req: Request, res: Response, next: NextFunction) => {
  
  try {
    
    const result = await BookingServices.updateBookingCarIntoDB(req.params.id, req.body);

    res.status(200).json({
      success: true,
      message: "Car Book updated successfully.",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
 const getAllUserBookingCars = async (req: Request, res: Response, next: NextFunction) => {

  try {
    
    const result = await BookingServices.getAllUserBookingCarsIntoDB(req.params.id);

    res.status(200).json({
      success: true,
      message: "All User Booked Cars retrieve successfully.",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
 const getAllOwnerBookingCars = async (req: Request, res: Response, next: NextFunction) => {

  try {
    
    const result = await BookingServices.getAllOwnerBookingCarsIntoDB(req.params.id);

    res.status(200).json({
      success: true,
      message: "All User Booked Cars retrieve successfully.",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

 const deleteBookingCar = async (req: Request, res: Response, next: NextFunction) => {
  
  try {
    
    const result = await BookingServices.deleteBookingCarIntoDB(req.params.id);

    res.status(200).json({
      success: true,
      message: "One Booked car deleted successfully.",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};



export const BookingControllers = {
  addBookingCar,
  approvedBookingCar,
    updateBookingCar,
    getAllOwnerBookingCars,
    getAllUserBookingCars,
    deleteBookingCar,
    canceledBookingCar
}