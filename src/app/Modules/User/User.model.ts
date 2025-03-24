import { model, Schema } from 'mongoose';
import { TUser } from './User.type';

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
