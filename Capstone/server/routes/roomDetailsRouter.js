import express from "express";
const router = express.Router();

import {addRoom, deleteRoom,  updateRoom, getAllRoom} from "../controllers/roomDetailsController.js";

router.post("/addRoom", addRoom);
router.put("/updateRoom/:roomId", updateRoom);
router.delete("/deleteRoom/:roomId", deleteRoom);
router.get("/getAllRoom/:hotelId", getAllRoom);

export default router;