import { model, Schema } from 'mongoose';
import { TBookingCar } from './Book.type';



const bookingCarSchema = new Schema<TBookingCar>({
  
  userId: { 
    type:  Schema.Types.ObjectId, 
    required: true, 
    ref: 'User'
  },
  ownerId: { 
    type:  Schema.Types.ObjectId, 
    required: true, 
     ref: 'User'
  },

  carId: { 
    type: Schema.Types.ObjectId,
    required: true,
     ref: 'Car'
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
    type: String, 
    required: true
   },
   dropOffDate: { 
    type: String, 
    required: true
   },
   
   totalCost: { 
    type: Number, 
    required: true
   },
 
   status: { 
    type: String, 
    enum: ['Pending' ,'Canceled' , 'Approved'],
    required: true,
    default: "Pending"
   },
   payment_status: { 
    type: String, 
    enum: ['pending_payment' ,'canceled_payment' , 'approved_payment'],
    required: true,
    default: "pending_payment"
   }
},
{
  timestamps:true
});

export const BookingCar = model<TBookingCar>('BookingCar', bookingCarSchema);


