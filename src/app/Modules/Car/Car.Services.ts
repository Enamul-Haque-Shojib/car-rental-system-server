import { Car, CarReview } from "./Car.model";
import { TCar, TCarReview } from "./Car.type";



const addCarIntoDB = async (payload: TCar) => {

const result = await Car.create(payload);
    return result;

};
const updateCarIntoDB = async (id: string, payload: Partial<TCar>) => {
    
const result = await Car.findByIdAndUpdate(id, payload,{new: true});

    return result;

};

const getAllCarsIntoDB = async () => {
  
const result = await Car.find().populate('userId');
    return result;

};
const getOneCarIntoDB = async (id: string) => {

const result = await Car.findOne({_id:id}).populate('userId');
    return result;

};

const deleteCarIntoDB = async (id: string) => {

const result = await Car.findByIdAndDelete(id);
    return result;

};


const addCarReviewIntoDB = async (
    carRegisterNumber: string,
    payload: TCarReview,
  ) => {
    const userReview = await CarReview.findOneAndUpdate(
      { carRegisterNumber },
      { $push: { reviews: payload } },
      { new: true, upsert: true },
    );
  
    if (!userReview) {
      throw new Error('Could not added the review');
    }
    return userReview;
  };
  
  const getAllCarReviewsFromDB = async () => {
    const result = await CarReview.find();
    return result;
  };
  const getSingleCarReviewsFromDB = async (carRegisterNumber: string) => {
    const reviewsData = await CarReview.findOne(
      { carRegisterNumber },
      { reviews: 1 },
    ).lean();
  
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
  

 export const CarServices = {
    addCarIntoDB,
    updateCarIntoDB,
    getAllCarsIntoDB,
    getOneCarIntoDB,
    deleteCarIntoDB,
    addCarReviewIntoDB,
    getAllCarReviewsFromDB,
    getSingleCarReviewsFromDB

  }