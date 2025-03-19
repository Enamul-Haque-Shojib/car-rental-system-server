
  export type TFetures = {
    airConditioner: boolean;
    gps: boolean;
    bluetooth: boolean;
    rearCamera: boolean;
    sunroof: boolean;
    fourWheelDrive: boolean;
  }


  export type TCar = {
    email: string;
    brand: string;
    carModel: string;
    year: number;
    type: string;
    fuelType: string;
    seats: number;
    transmission: string;
    mileAge: number;
    pricePerDay: number;
    location: string;
    availability: boolean;
    features: TFetures;
    image: string; 
    description: string;
    registrationNumber: string;
  }