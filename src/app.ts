import express, { Application } from 'express';
import cors from 'cors';



import { UserRoutes } from './app/Modules/User/User.route';
import cookieParser from 'cookie-parser';
import { CarRoutes } from './app/Modules/Car/Car.routes';

const app: Application = express();

app.use(cors({ origin: ["http://localhost:5173"], credentials: true }));
app.use(express.json());
app.use(cookieParser());



app.use('/api/users', UserRoutes);
app.use('/api/cars', CarRoutes);



app.get("/", (req, res) => {
    res.send("🚀 Welcome to the Express API----------------everything- main brach----------------------newwwwwww");
  });




export default app;
