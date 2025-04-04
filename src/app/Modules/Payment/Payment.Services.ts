
import { Payment } from "./Payment.model";
import { TPayment } from "./Payment.type";



const addPaymentIntoDB = async (payload: TPayment) => {

    const result = await Payment.create(payload);
    return result;
};


const getAllOwnerPaymentsIntoDB = async (id: string) => {
  
const result = await Payment.find({ownerId: id}).populate('carId').populate('userId');
    return result;

};



const deletePaymentIntoDB = async (id: string) => {

const result = await Payment.findByIdAndDelete(id);
    return result;

};



 export const PaymentServices = {
    addPaymentIntoDB,
    getAllOwnerPaymentsIntoDB,
    deletePaymentIntoDB
  }