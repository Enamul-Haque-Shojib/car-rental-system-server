

  export type TBookingCar = {
    ownerEmail: string;
    carNumber: string;     //registration Number
    userEmail: string;
    pickUpLocation: string;
    dropOffLocation: string;
    pickUpDate?: Date;
    dropOffDate: string;
    RentalDuration: number;
    totalCost: number;
    seats: number;
    status: 'Pending' |'Canceled' | 'Approved';
   
  }