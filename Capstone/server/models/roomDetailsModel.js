import mongoose from "mongoose";

const RoomDetailsSchema = new mongoose.Schema({
    hotel_id :{
        type: String,
        required: true,
    },

    room_type :{
        type: String,
        required: true,

    },

    room_desc :{
        type: String,
        required: true,
    },

    no_of_beds:{
        type: Number,
        required: true,
    },

    max_ppl:{
        type:Number,
        required: true,
    },

    photos:{
        type:String,
        required: true,
    },

    amenties:{
        type:Array,
        required:true
    },

    price:{
        type:String,
        required:true
    },
    
    no_of_rooms:{
        type:Number,
        required:true
    }
    
}, {timestamps:true})

export default mongoose.model("RoomDetails", RoomDetailsSchema)