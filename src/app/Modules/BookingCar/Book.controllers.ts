import { NextFunction, Request, Response } from "express";
import { BookingServices } from "./Book.Services";



 const addBookingCar = async (req: Request, res: Response, next: NextFunction) => {
  
  try {
    
    const result = await BookingServices.approvedBookingCarIntoDB(req.params.id, req.body);

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
      message: "Car Book approved successfully.",
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
 const getAllBookingCars = async (req: Request, res: Response, next: NextFunction) => {

  try {
    
    const result = await BookingServices.getAllBookingCarsIntoDB(req.params.email);

    res.status(200).json({
      success: true,
      message: "All Booked Cars retrieve successfully.",
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
    getAllBookingCars,
    deleteBookingCar
}