import { NextFunction, Request, Response } from "express";

import { CarServices } from "./Car.Services";

 const addCar = async (req: Request, res: Response, next: NextFunction) => {
  
  try {
    
    const result = await CarServices.addCarIntoDB(req.body);

    res.status(200).json({
      success: true,
      message: "Car added successfully.",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
 const updateCar = async (req: Request, res: Response, next: NextFunction) => {
 console.log(req.params.id,req.body)
  try {
    
    const result = await CarServices.updateCarIntoDB(req.params.id, req.body);

    res.status(200).json({
      success: true,
      message: "Car updated successfully.",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
 const getAllCars = async (req: Request, res: Response, next: NextFunction) => {

  try {
    
    const result = await CarServices.getAllCarsIntoDB();

    res.status(200).json({
      success: true,
      message: "All Cars retrieve successfully.",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
 const getOneCar = async (req: Request, res: Response, next: NextFunction) => {
  
  try {
    
    const result = await CarServices.getOneCarIntoDB(req.params.id);

    res.status(200).json({
      success: true,
      message: "One Car retrieve successfully.",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
 const deleteCar = async (req: Request, res: Response, next: NextFunction) => {
  
  try {
    
    const result = await CarServices.deleteCarIntoDB(req.params.id);

    res.status(200).json({
      success: true,
      message: "One Car deleted successfully.",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};



const addCarReview = async (req: Request, res: Response, next: NextFunction)  => {


  try {
    
    const result = await CarServices.addCarReviewIntoDB(
      req.params.id,
      req.body,
    );

    res.status(200).json({
      success: true,
      message: "Review added successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }


 

};

const getAllCarReviews = async (req: Request, res: Response, next: NextFunction)  => {
  
  try {
    
    const result = await CarServices.getAllCarReviewsFromDB();

    res.status(200).json({
      success: true,
      message: "Review retrieved successfully'",
      data: result,
    });
  } catch (error) {
    next(error);
  }

};


const getSingleCarReviews = async (req: Request, res: Response, next: NextFunction)  => {

  try {
    
    const result = await CarServices.getSingleCarReviewsFromDB(
      req.params.id,
    );

    res.status(200).json({
      success: true,
      message: "One Review retrieved successfully'",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};


export const CarControllers = {
    addCar,
    updateCar,
    getAllCars,
    getOneCar,
    deleteCar,
    addCarReview,
    getAllCarReviews,
    getSingleCarReviews,
}