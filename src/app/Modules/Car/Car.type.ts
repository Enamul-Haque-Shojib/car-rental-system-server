import { Types } from "mongoose";

  

  export type TReview = {
   userId: Types.ObjectId,
    feedback: string;
    reviewDate: Date;
    rating: number;
  };
  
  export type TCarReview = {
    carRegisterNumber: string;
    reviews: TReview[];
  };
  
  
  
  
  export type TFetures = {
    airConditioner: boolean;
    gps: boolean;
    bluetooth: boolean;
    rearCamera: boolean;
    sunroof: boolean;
    fourWheelDrive: boolean;
  }


  export type TCar = {
    userId: Types.ObjectId;
    brand: string;
    carModel: string;
    year: string;
    type: string;
    fuelType: string;
    seats: string;
    transmission: string;
    mileAge: string;
    pricePerDay: string;
    location: string;
    availability: boolean;
    features: TFetures;
    image: string; 
    description: string;
    registrationNumber: string;
  }