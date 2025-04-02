import { sendEmail } from "../../utils/sendEmail";
import { Car } from "../Car/Car.model";
import { BookingCar } from "./Book.model";
import { TBookingCar } from "./Book.type";


const addBookingCarIntoDB = async (payload: TBookingCar) => {

    const result = await BookingCar.create(payload);
    return result;
};

const approvedBookingCarIntoDB = async (id: string, payload: {carId: string}) => {
    

    const updatedBookingCar = await BookingCar.findByIdAndUpdate(
        id,
        { status: 'Approved' },
        { new: true }
    ).populate<{ userId: { email: string } }>('userId', 'email');
   
    if (!updatedBookingCar) {
        throw new Error("Booking Car not found or unable to update status.");
    }
   

    const updatedCar = await Car.findOneAndUpdate(
        { _id: payload.carId },
        { availability: false },
        { new: true }
    );

    if (!updatedCar) {
        throw new Error("Car not found or unable to update availability.");
    }

    
    if (!updatedBookingCar?.userId || typeof updatedBookingCar.userId === 'string') {
        throw new Error("User not found or email not available.");
    } 
    sendEmail(updatedBookingCar.userId.email, 'Approved your rental request' ,"Have a nice drive with your rental car");


    return null;
};
const canceledBookingCarIntoDB = async (id: string) => {
    
   
    const updatedBookingCar = await BookingCar.findByIdAndUpdate(
        id,
        { status: 'Canceled' },
        { new: true }
    );
   
    if (!updatedBookingCar) {
        throw new Error("Booking Car not found or unable to update status.");
    }
   
    return null;
};

const updateBookingCarIntoDB = async (id: string, payload: Partial<TBookingCar>) => {
    
const result = await BookingCar.findByIdAndUpdate(id, payload,{new: true});

    return result;

};

const getAllOwnerBookingCarsIntoDB = async (id: string) => {
  console.log(id);
const result = await BookingCar.find({ownerId: id}).populate('carId').populate('userId');
    return result;

};
const getAllUserBookingCarsIntoDB = async (id: string) => {
  
const result = await BookingCar.find({userId: id}).populate('carId').populate('ownerId');
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
    getAllOwnerBookingCarsIntoDB,
    getAllUserBookingCarsIntoDB,
    canceledBookingCarIntoDB,
    deleteBookingCarIntoDB
  }