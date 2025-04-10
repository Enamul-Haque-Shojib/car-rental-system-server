/* eslint-disable @typescript-eslint/no-explicit-any */
import { BookingCar } from "../BookingCar/Book.model";
import { Car } from "../Car/Car.model";
import { User, UserReviewModel } from "../User/User.model";



const getTopThreeCars = async () => {
  const userReviewData = await UserReviewModel.find().populate({
    path: 'carId',
    select: 'image brand registrationNumber', // Only fetch required fields
  });

  // Filter out reviews without a valid carId
  const validReviews = userReviewData.filter((review) => review.carId);

  // Compute average ratings
  const carsWithRatings = validReviews.map((review) => {
    const totalRating = review.reviews.reduce((sum, r) => sum + r.rating, 0);
    const avgRating = review.reviews.length > 0 ? totalRating / review.reviews.length : 0;

    return {
      image: (review.carId as any).image, // Type assertion to access fields
      brand: (review.carId as any).brand,
      registrationNumber: (review.carId as any).registrationNumber,
      avgRating,
    };
  });

  // Sort by average rating in descending order and take the top three
  const topThreeCars = carsWithRatings.sort((a, b) => b.avgRating - a.avgRating).slice(0, 3);

  return topThreeCars;
};

const getStatisticsCarsPieChart = async (id: string) => {
  const carsData = await Car.find({userId: id});

  const statusCounts = carsData.reduce(
    (acc, car) => {
      acc[car.status] = (acc[car.status] || 0) + 1;
      return acc;
    },
    { not_rent: 0, rent: 0, disable: 0 }
  );

  return statusCounts;
};

const getStatisticsUsersPieChart = async () => {
  const usersData = await User.find();

  const roleCounts = usersData.reduce(
    (acc, user) => {
      acc[user.role] = (acc[user.role] || 0) + 1;
      return acc;
    },
    { admin: 0, user: 0, owner: 0 }
  );

  return roleCounts;
};

const getStatisticsBookingsPieChart = async (id: string) => {
  const bookingData = await BookingCar.find({userId: id});
  console.log(bookingData)
  if(!bookingData) {
    throw new Error('Booking data does not exist')
  }

  const statusCounts = bookingData.reduce(
    (acc, book) => {
      acc[book.status] = (acc[book.status] || 0) + 1;
      return acc;
    },
    { Pending: 0, Approved: 0, Canceled: 0, Completed: 0 }
  );

  return statusCounts;
};


const getStatisticsStates = async () => {
  try {
    // Fetch all data
    const carsData = await Car.find();
    const usersData = await User.find();
    const reviewsData = await UserReviewModel.find();


    const totalCars = carsData.length;


    const totalUsers = usersData.length;


    const totalOwners = usersData.filter(user => user.role === "owner").length;


    let totalReviews = 0;
    let totalRating = 0;

    reviewsData.forEach(reviewEntry => {
      reviewEntry.reviews.forEach(review => {
        totalReviews += 1;
        totalRating += review.rating;
      });
    });

    const averageReview = totalReviews > 0 ? Math.ceil(totalRating / totalReviews) : 0;

    return {
      totalCars,
      totalUsers,
      totalOwners,
      averageReview
    };
  } catch (error) {
    console.error("Error fetching statistics:", error);
    throw new Error("Failed to fetch statistics");
  }
};



  export const StatisticsServices = {
    getTopThreeCars,
    getStatisticsCarsPieChart,
    getStatisticsUsersPieChart,
    getStatisticsBookingsPieChart,
    getStatisticsStates
  }