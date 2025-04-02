import { model, Schema } from 'mongoose';
import { TReview, TUser, TUserReview } from './User.type';


const reviewSchema = new Schema<TReview>({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  
  feedback: {
    type: String,
    required: true,
  },
  reviewDate: {
    type: Date,
    default: Date.now(),
  },
  rating: {
    type: Number,
    required: true,
    default: 0,
  },
});

const userReviewSchema = new Schema<TUserReview>({
  carId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Car'
  },

  reviews: [reviewSchema],
});


const userSchema = new Schema<TUser>({
  name: { type: String, required: true },
  photoURL: { 
    type: String,
    default: ''
   },
  email: { type: String, required: true, unique: true },
  role:{
    type: String,
    enum:['admin', 'user'],
    default: 'user'
  }
},
{
  timestamps:true,
  toJSON: {
    transform: (doc, ret) => {
     
      delete ret.createdAt; 
      delete ret.updatedAt; 
      return ret;
    },
  },
});


export const User = model<TUser>('User', userSchema);
export const UserReviewModel = model<TUserReview>(
  'User Review',
  userReviewSchema,
);
