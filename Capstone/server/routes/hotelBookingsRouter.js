import express from "express";
const router = express.Router();

import {addBooking, deleteBooking, getAllBooking} from "../controllers/hotelBookingsController.js";

router.post("/addBooking", addBooking);
router.delete("/deleteBooking/:id", deleteBooking);
router.get("/getAllBooking/:customerId", getAllBooking);

export default router;