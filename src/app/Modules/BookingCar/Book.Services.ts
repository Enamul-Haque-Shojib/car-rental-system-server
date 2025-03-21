import { Car } from "../Car/Car.model";
import { BookingCar } from "./Book.model";
import { TBookingCar } from "./Book.type";


const addBookingCarIntoDB = async (payload: TBookingCar) => {

    const result = await BookingCar.create(payload);
    return result;
};

const approvedBookingCarIntoDB = async (id: string, payload: {registrationNumber: string}) => {
    
   
    const updatedBookingCar = await BookingCar.findByIdAndUpdate(
        id,
        { status: 'Approved' },
        { new: true }
    );
   
    if (!updatedBookingCar) {
        throw new Error("Booking Car not found or unable to update status.");
    }
   

    const updatedCar = await Car.findOneAndUpdate(
        { registrationNumber: payload.registrationNumber },
        { availability: false },
        { new: true }
    );

    if (!updatedCar) {
        throw new Error("Car not found or unable to update availability.");
    }
    return null;
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
    approvedBookingCarIntoDB,
    updateBookingCarIntoDB,
    getAllBookingCarsIntoDB,

    deleteBookingCarIntoDB
  }