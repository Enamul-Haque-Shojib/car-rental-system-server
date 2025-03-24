import { NextFunction, Request, Response } from "express";

import { generateToken } from "../../utils/generateToken";

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





export const login = async (req: Request, res: Response,next: NextFunction) => {

 
  try {

    const result = await UserServices.loginIntoDB(req.body);
  
    
    const jwtToken =  generateToken(result._id.toString(),result.email,result.role);



    // Set JWT  cookie
    res.cookie("Token", jwtToken, {
      httpOnly: true,
      // secure: process.env.NODE_ENV === "production",
      secure: false,
      sameSite:process.env.NODE_ENV === 'production' ? 'none' : 'strict',
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    res.json({data:result, message: "Login successful" });
  } catch (error) {
    next(error)
    // res.status(500).send({ message: "Server error",  });
  }
};

// Logout
export const logoutUser = (req: Request, res: Response) => {
  res.clearCookie("Token");
  res.json({ message: "Logged out successfully" });
};


 const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {

  try {
    
    const result = await UserServices.getAllUsersIntoDB();

    res.status(200).json({
      success: true,
      message: "All Users retrieve successfully.",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
 const getOneUser = async (req: Request, res: Response, next: NextFunction) => {

  try {
    
    const result = await UserServices.getOneUserIntoDB(req.params.id);


    res.status(200).json({
      success: true,
      message: "All Users retrieve successfully.",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
 const updateUser = async (req: Request, res: Response, next: NextFunction) => {
 console.log(req.params.id, req.body)
  try {
    
    const result = await UserServices.updateUserIntoDB(req.params.id, req.body);

    res.status(200).json({
      success: true,
      message: "User updated successfully.",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};


export const UserController = {
  registerUser,
  getAllUsers,
  updateUser,
  getOneUser
}