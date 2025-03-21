import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const generateToken =  (userId: string,email:string,role:string): string => {
    return jwt.sign({ id: userId,email,role }, process.env.JWT_SECRET as string, {
      expiresIn: "7d",
    });
  };