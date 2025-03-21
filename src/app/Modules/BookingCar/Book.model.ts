import { model, Schema } from 'mongoose';
import { TBookingCar } from './Book.type';



const bookingCarSchema = new Schema<TBookingCar>({
  email: { 
    type:  String, 
    required: true, 
  },

  carNumber: { 
    type: String,
    required: true,
   },
   
   pickUpLocation: { 
    type: String, 
    required: true
   },
   dropOffLocation: { 
    type: String, 
    required: true
   },
   pickUpDate: { 
    type: Date, 
    default: new Date()
   },
   dropOffDate: { 
    type: String, 
    required: true
   },
   RentalDuration: { 
    type: Number, 
    required: true
   },
   totalCost: { 
    type: Number, 
    required: true
   },
   seats: { 
    type: Number, 
    required: true
   },
   status: { 
    type: String, 
    enum: ['Pending' ,'Confirmed' , 'Canceled' , 'Completed'],
    required: true,
    default: "Pending"
   }
},
{
  timestamps:true
});

export const BookingCar = model<TBookingCar>('BookingCar', bookingCarSchema);


