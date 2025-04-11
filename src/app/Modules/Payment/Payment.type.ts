import { Types } from "mongoose";
import { TUser } from "../User/User.type";


  export type TPayment = {
    ownerId: Types.ObjectId | TUser;
    carId: Types.ObjectId;     
    userId: Types.ObjectId;
    pickUpLocation: string;
    dropOffLocation: string;
    pickUpDate: string;
    dropOffDate: string;
    totalCost: number;
    transactionId: string;
   
  }