import { model, Schema } from 'mongoose';
import { TUser } from './User.type';

const userSchema = new Schema<TUser>({
  name: { type: String, required: true },
  photoURL: { 
    type: String,
    default: ''
   },
  email: { type: String, required: true, unique: true },
},
{
  timestamps:true
});

export const User = model<TUser>('User', userSchema);
