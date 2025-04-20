import cors from 'cors';
import express, { Application } from 'express';



import cookieParser from 'cookie-parser';
import globalErrorHandler from './app/middlewares/globalErrorhandler';
import notFound from './app/middlewares/notFound';
import { AiRoutes } from './app/Modules/Ai-assistant/AI.Route';
import { BookingRoutes } from './app/Modules/BookingCar/Book.routes';
import { CarRoutes } from './app/Modules/Car/Car.routes';
import { paymentRoutes } from './app/Modules/Payment/Payment.routes';
import { StatisticsRoutes } from './app/Modules/Statistics/Statistics.routes';
import { UserRoutes } from './app/Modules/User/User.route';

const app: Application = express();

app.use(cors({ origin: ["http://localhost:5173", "https://car-rentals-system.netlify.app"], credentials: true }));
app.use(express.json());
app.use(cookieParser());



app.use('/api/auth', UserRoutes);
app.use('/api/cars', CarRoutes);
app.use('/api/bookings', BookingRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/statistics', StatisticsRoutes);
app.use('/api/ai',AiRoutes); // ai assistant route



app.get("/", (req, res) => {
    res.send("🚀 Welcome to the Car Rental System");
  });


app.use(globalErrorHandler);
app.use(notFound);


export default app;
