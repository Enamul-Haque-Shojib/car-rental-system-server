import { User, UserReviewModel } from "./User.model";
import { TUser, TUserReview } from "./User.type";


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


  



  const getAllUsersIntoDB = async () => {
    
  const result = await User.find();
      return result;
  
  };
  const getOneUserIntoDB = async (id: string) => {

  const result = await User.findById(id);

      return result;
  
  };
  const updateUserIntoDB = async (id: string, payload: Partial<TUser>) => {
    
  const result = await User.findByIdAndUpdate(id, payload,{new: true});
      return result;
  
  };




  const addUserReviewIntoDB = async (
    carId: string,
    payload: TUserReview,
  ) => {
    const userReview = await UserReviewModel.findOneAndUpdate(
      { carId },
      { $push: { reviews: payload } },
      { new: true, upsert: true },
    );
  
    if (!userReview) {
      throw new Error('Could not added the review');
    }
    return userReview;
  };
  
  const getAllCarReviewsFromDB = async () => {
    const result = await UserReviewModel.find().populate('carId').populate('reviews.userId');
    return result;
  };
  const getSingleCarReviewsFromDB = async (carId: string) => {
    const reviewsData = await UserReviewModel.findOne(
      { carId },
      { reviews: 1 },
    ).lean().populate('reviews.userId');
  
    if (!reviewsData || !reviewsData.reviews) {
      return [];
    }
  
    const result = reviewsData.reviews.sort((a, b) => {
      const dateA = a.rating;
      const dateB = b.rating;
      return dateB - dateA;
    });

    return result;
  };



  export const UserServices = {
    registerUserIntoDB,
    loginIntoDB,
    getAllUsersIntoDB,
    updateUserIntoDB,
    getOneUserIntoDB,
    addUserReviewIntoDB,
    getAllCarReviewsFromDB,
    getSingleCarReviewsFromDB
  }