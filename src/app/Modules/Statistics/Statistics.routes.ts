import express from 'express';

import { StatisticsControllers } from './Statistics.controllers';

const router = express.Router();

// router.get(
//   '/number-booked-delvered-usingapp',

//   StatisticsControllers.numberBookedDeliveredUsingApp,
// );
router.get(
  '/states',

  StatisticsControllers.statisticsStates,
);
router.get(
  '/top-three-cars',

  StatisticsControllers.topThreeCars,
);
router.get(
  '/piechart-cars/:id',

  StatisticsControllers.statisticsCarsPieChart,
);
router.get(
  '/piechart-users',

  StatisticsControllers.statisticsUsersPieChart,
);
router.get(
  '/piechart-bookings/:id',

  StatisticsControllers.statisticsBookingsPieChart,
);


export const StatisticsRoutes = router;
