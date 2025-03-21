import { User } from "./User.model";
import { TUser } from "./User.type";


const registerUserIntoDB = async (email: string, payload: TUser) => {
    
    
        if (!email) {
            throw new Error("Email is required" );
        }
    
        const isEmailExist = await User.findOne({ email });
        if (isEmailExist) {
          throw new Error("Email already in use" );
        }
    
        const result = await User.create(payload);
    return result;
  };


  

const loginIntoDB = async (payload: TUser) => {
    
  const { email} = payload;
 
 

  
  const user = await User.findOne({ email });

  if (user) {
    // throw new Error("Email already in use" );
      return user;    
  }
  const result = await User.create(payload);
  return result;

 
  };


  
 export const UserServices = {
    registerUserIntoDB,
    loginIntoDB
  }