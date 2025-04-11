import { Types } from "mongoose";
import { TUser } from "../User/User.type";


  export type TBookingCar = {
    ownerId: Types.ObjectId | TUser;
    carId: Types.ObjectId;     
    userId: Types.ObjectId;
    pickUpLocation: string;
    dropOffLocation: string;
    pickUpDate: string;
    dropOffDate: string;
    totalCost: number;
    status: 'Pending' |'Canceled' | 'Approved' | 'Completed';
    payment_status: 'pending_payment' |'canceled_payment' | 'approved_payment';
   
  }