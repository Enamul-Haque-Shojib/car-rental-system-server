import { model, Schema } from 'mongoose';
import { TCar, TFetures } from './Car.type';


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
})

const carSchema = new Schema<TCar>({
  email: { 
    type: String, 
    required: true, 
  
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
    required: true
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


