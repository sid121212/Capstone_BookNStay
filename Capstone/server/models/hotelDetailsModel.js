import mongoose from "mongoose";

const HotelDetailsSchema = new mongoose.Schema(
  {
    admin_id: {
      type: String,
      required: true,
      unique: true,
    },

    hotel_name: {
      type: String,
      required: true,
      unique: true,
    },
    hotel_desc: {
      type: String,
    },
    hotel_rating: {
      type: Number,
      required: true,
    },
    hotel_start_date: {
      type: Date,
    },
    price: {
      type: Number,
      required: true,
    },
    address: {
      locality: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      pincode: {
        type: Number,
        required: true,
      },
      state: {
        type: String,
        required: true,
      },
      country: {
        type: String,
        required: true,
      },
    },
    amenties: {
      type: Array,
    },

    photos: {
      type: Array,
    },

    check_in: {
      type: String,
    },

    check_out: {
      type: String,
    },
    userRating: {
      type: Number,
      required: true,
    },
  },
  {timestamps: true}
);

export default mongoose.model("HotelDetails", HotelDetailsSchema);
