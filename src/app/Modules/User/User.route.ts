import express from "express";
import {   login, logoutUser, UserController } from "./User.controller";


const router = express.Router();

router.post("/register/:email", UserController.registerUser); 
router.post("/login", async (req, res, next) => {
    try {
      await login(req, res, next); 
    } catch (error) {
      next(error); 
    }
  });
  router.post("/logout",logoutUser);

  router.patch("/update-user/:id",UserController.updateUser);
  router.get("/one-user/:id",UserController.getOneUser);
  router.get("/",UserController.getAllUsers);



export const UserRoutes = router;
