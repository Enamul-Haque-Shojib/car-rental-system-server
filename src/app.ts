import express, { Application } from 'express';
import cors from 'cors';



import { UserRoutes } from './app/Modules/User/User.route';
import cookieParser from 'cookie-parser';

const app: Application = express();

app.use(cors({ origin: ["http://localhost:5173"], credentials: true }));
app.use(express.json());
app.use(cookieParser());



app.use('/api/users', UserRoutes);



app.get("/", (req, res) => {
    res.send("🚀 Welcome to the Express API---------------------------------------newwwwwww");
  });



export default app;
