

  export type TBookingCar = {
    
    email: string;
    carNumber: string;     //registration Number
    pickUpLocation: string;
    dropOffLocation: string;
    pickUpDate?: Date;
    dropOffDate: string;
    RentalDuration: number;
    totalCost: number;
    seats: number;
    status: 'Pending' |'Confirmed' | 'Canceled' | 'Completed';
   
  }