import { NextFunction, Request, Response } from "express";

import { UserServices } from "./User.service";

 const registerUser = async (req: Request, res: Response, next: NextFunction) => {
  
  try {
    
    const result = await UserServices.registerUserIntoDB(req.params.email, req.body);

    res.status(200).json({
      success: true,
      message: "User registered successfully.",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};



export const UserController = {
  registerUser
}