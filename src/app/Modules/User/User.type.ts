import { Types } from "mongoose";





export type TReview = {
  userId: Types.ObjectId;
  feedback: string;
  reviewDate: Date;
  rating: number;
};

export type TUserReview = {
  carId: Types.ObjectId;
  reviews: TReview[];
};




export type TUser = {
  name: string;
  photoURL?: string;
  email: string;
  role: 'admin' | 'user'
};
