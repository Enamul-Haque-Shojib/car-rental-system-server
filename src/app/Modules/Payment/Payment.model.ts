import { model, Schema } from 'mongoose';
import { TPayment } from './Payment.type';




const paymentSchema = new Schema<TPayment>({
  
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
    enum: ['Approved'],
    required: true,
   },
   transactionId:{
    type: String, 
    required: true
   }
},
{
  timestamps:true
});

export const Payment = model<TPayment>('Payment', paymentSchema);


