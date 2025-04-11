import { NextFunction, Request, Response } from "express";
import { StatisticsServices } from "./Statistics.services";



const topThreeCars = async(req: Request, res: Response, next: NextFunction)=> {

    try {
        const numberData = await StatisticsServices.getTopThreeCars();
        res.status(200).json({
            success: true,
            message: "Top three Cars retrieve successfully. ",
            data: numberData,
          });
    } catch (error) {
        next(error);
    }
    
  
  
  };
const statisticsCarsPieChart = async(req: Request, res: Response, next: NextFunction)=> {

    try {
        const numberData = await StatisticsServices.getStatisticsCarsPieChart(req.params.id);
        res.status(200).json({
            success: true,
            message: "Pie chart Cars retrieve successfully.",
            data: numberData,
          });
    } catch (error) {
        next(error);
    }
  
  };
const statisticsStates = async(req: Request, res: Response, next: NextFunction)=> {

    try {
        const numberData = await StatisticsServices.getStatisticsStates();
        res.status(200).json({
            success: true,
            message: "States retrieve successfully.",
            data: numberData,
          });
    } catch (error) {
        next(error);
    }
  
  };
const statisticsUsersPieChart = async(req: Request, res: Response, next: NextFunction)=> {

    try {
        const numberData = await StatisticsServices.getStatisticsUsersPieChart();
        res.status(200).json({
            success: true,
            message: "Pie chart Users retrieve successfully.",
            data: numberData,
          });
    } catch (error) {
        next(error);
    }
  
  };
const statisticsBookingsPieChart = async(req: Request, res: Response, next: NextFunction)=> {
console.log(req.params.id)
    try {
        const numberData = await StatisticsServices.getStatisticsBookingsPieChart(req.params.id);
        res.status(200).json({
            success: true,
            message: "Pie chart Bookings retrieve successfully.",
            data: numberData,
          });
    } catch (error) {
        next(error);
    }
  
  };


  export const StatisticsControllers = {
    topThreeCars,
    statisticsCarsPieChart,
    statisticsUsersPieChart,
    statisticsBookingsPieChart,
    statisticsStates
  }