import { model, Schema} from 'mongoose';
import { TCar, TCarReview, TFetures, TReview } from './Car.type';



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

const carReviewSchema = new Schema<TCarReview>({
  carRegisterNumber: {
    type: String,
    required: true,
  },

  reviews: [reviewSchema],
});







const featuresSchema = new Schema<TFetures>({
  airConditioner: {
    type: Boolean,
    required: true,
  },
  gps: {
    type: Boolean,
    required: true,
  },
  bluetooth: {
    type: Boolean,
    required: true,
  },
  rearCamera: {
    type: Boolean,
    required: true,
  },
  sunroof: {
    type: Boolean,
    required: true,
  },
  fourWheelDrive: {
    type: Boolean,
    required: true,
  },
},{ _id: false })

const carSchema = new Schema<TCar>({
  userId: { 
    type: Schema.Types.ObjectId, 
    required: true, 
  ref: 'User'
  },
  brand: { 
    type: String, 
    required: true
   },
   carModel: { 
    type: String, 
    required: true
   },
   year: { 
    type: Number, 
    required: true
   },
   type: { 
    type: String, 
    required: true
   },
   fuelType: { 
    type: String, 
    required: true
   },
   seats: { 
    type: Number, 
    required: true
   },
   transmission: { 
    type: String, 
    required: true
   },
   mileAge: { 
    type: Number, 
    required: true
   },
   pricePerDay: { 
    type: Number, 
    required: true
   },
   location: { 
    type: String, 
    required: true
   },
   availability: { 
    type: Boolean, 
    required: true,
  
   },
   features: { 
    type: featuresSchema, 
    required: true
   },
   image: { 
    type: String, 
    required: true
   },
   description: { 
    type: String, 
    required: true
   },
   registrationNumber: { 
    type: String, 
    required: true,
    unique: true
   },
 
},
{
  timestamps:true
});

export const Car = model<TCar>('Car', carSchema);
export const CarReview = model<TCarReview>(
  'Car Review',
  carReviewSchema,
);


