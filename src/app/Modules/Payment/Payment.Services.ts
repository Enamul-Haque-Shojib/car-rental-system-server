
import { sendEmail } from "../../utils/sendEmail";
import { User } from "../User/User.model";
import { Payment } from "./Payment.model";
import { TPayment } from "./Payment.type";



const addPaymentIntoDB = async (payload: TPayment) => {
    const ownerData = await User.findById(payload.ownerId);
    if(!ownerData) {
        throw new Error('Owner not found');
    }
    const result = await Payment.create(payload);


    sendEmail(ownerData.email, 'Payment received Successfully' ,"You have been received payment successfully from your client");

    return result;
};


const getAllOwnerPaymentsIntoDB = async (id: string) => {
  
const result = await Payment.find({ownerId: id}).populate('carId').populate('userId').populate('ownerId');
    return result;

};
const getAllUserPaymentsIntoDB = async (id: string) => {
  
const result = await Payment.find({userId: id}).populate('carId').populate('userId').populate('ownerId');
    return result;

};



const deletePaymentIntoDB = async (id: string) => {

const result = await Payment.findByIdAndDelete(id);
    return result;

};



 export const PaymentServices = {
    addPaymentIntoDB,
    getAllOwnerPaymentsIntoDB,
    getAllUserPaymentsIntoDB,
    deletePaymentIntoDB
  }