import mongoose from "mongoose";

const HotelBookingsSchema = new mongoose.Schema(
  {
    customer_id: {
      type: String,
      required: true,
      unique: true,
    },

    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true
    },
    phone: {
      type: Number,
      required: true,
    },
    adults: {
      type: Number,
    },
    children: {
      type: Number,
    },
    checkIn: {
      type: String,
    },

    checkOut: {
      type: String,
    },

    room: {
      type: String,
    },

    price: {
      type: Number,
    },
  },
  {timestamps: true}
);

export default mongoose.model("HotelBookings", HotelBookingsSchema);
