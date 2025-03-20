import express from "express";
import {  UserController } from "./User.controller";


const router = express.Router();

router.post("/register/:email", UserController.registerUser); 
router.post("/login",UserController.login)

export const UserRoutes = router;
