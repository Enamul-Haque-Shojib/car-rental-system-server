import express from "express";
import { UserController } from "./User.controller";


const router = express.Router();

router.post("/register/:email", UserController.registerUser); 

export const UserRoutes = router;
