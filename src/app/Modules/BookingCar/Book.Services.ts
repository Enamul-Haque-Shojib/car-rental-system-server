import { Car } from "../Car/Car.model";
import { BookingCar } from "./Book.model";
import { TBookingCar } from "./Book.type";


const addBookingCarIntoDB = async (payload: TBookingCar) => {
    // Update car availability
   
    const updatedCar = await Car.findOneAndUpdate(
        { registrationNumber: payload.carNumber },
        { availability: false },
        { new: true }
    );

    if (!updatedCar) {
        throw new Error("Car not found or unable to update availability.");
    }

    const result = await BookingCar.create(payload);
    return result;
};

const updateBookingCarIntoDB = async (id: string, payload: Partial<TBookingCar>) => {
    
const result = await BookingCar.findByIdAndUpdate(id, payload,{new: true});

    return result;

};

const getAllBookingCarsIntoDB = async (email: string) => {
  
const result = await BookingCar.find({email});
    return result;

};


const deleteBookingCarIntoDB = async (id: string) => {

const result = await BookingCar.findByIdAndDelete(id);
    return result;

};

 export const BookingServices = {
    addBookingCarIntoDB,
    updateBookingCarIntoDB,
    getAllBookingCarsIntoDB,

    deleteBookingCarIntoDB
  }