import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

import { User } from "./User.model";
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

 const login = async (req: Request, res: Response, next: NextFunction) => {
 
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
   
    if (!user) {
      return res.status(400).send({ error: "Invalid credentials",message: "Invalid credentials" });
    }

    // const token = jwt.sign({ email: user.email, id: user._id, role: user.role },"55c2c1610f804162b44a9a0a5bd12169e8260598563255383e174597974eac67e779e6137ac150da3bacca87bff743273579fa73ad9daa2867f1e6980bbdf1", { expiresIn: "1d" });

  //   // Store token in cookie
  //   // res.cookie("token", token, {
  //   //   httpOnly: true,
  //   //   secure: process.env.NODE_ENV === 'production',
  //   //   sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
  //   // });

  //   res.send({ message: "Login successful" });
  } catch (error) {
    next(error)
    // res.status(500).send({ error: "Login failed" });
  }
};

 const logout = async (req: Request, res: Response,) => {
  res
    .clearCookie('token', {
      maxAge: 0,
      secure: process.env.NODE_ENV === 'production',
      sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
    })
    .send({ success: true })

}



export const UserController = {
  registerUser,
  login,
  logout
}