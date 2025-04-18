import { Types } from "mongoose";
import { TUser } from "../User/User.type";


export type TCoords = {
  lat: number;
  lng: number;
}

  export type TBookingCar = {
    ownerId: Types.ObjectId | TUser;
    carId: Types.ObjectId;     
    userId: Types.ObjectId;
    pickUpLocation: string;
    dropOffLocation: string;
    pickUpCoord: TCoords;
    dropOffCoord: TCoords;
    pickUpDate: string;
    dropOffDate: string;
    totalCost: number;
    status: 'Pending' |'Canceled' | 'Approved' | 'Completed';
    payment_status: 'pending_payment' |'canceled_payment' | 'approved_payment';
   
  }