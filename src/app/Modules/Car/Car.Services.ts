import { Car } from "./Car.model";
import { TCar } from "./Car.type";



const addCarIntoDB = async (payload: TCar) => {

const result = await Car.create(payload);
    return result;

};
const updateCarIntoDB = async (id: string, payload: Partial<TCar>) => {
    console.log(payload)
const result = await Car.findByIdAndUpdate(id, payload,{new: true});

    return result;

};

const getAllCarsIntoDB = async () => {
  
const result = await Car.find();
    return result;

};
const getOneCarIntoDB = async (id: string) => {

const result = await Car.findOne({_id:id});
    return result;

};

const deleteCarIntoDB = async (id: string) => {

const result = await Car.findByIdAndDelete(id);
    return result;

};

 export const CarServices = {
    addCarIntoDB,
    updateCarIntoDB,
    getAllCarsIntoDB,
    getOneCarIntoDB,
    deleteCarIntoDB
  }