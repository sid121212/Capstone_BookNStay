import hotelBookingsModel from "../models/hotelBookings.js"

//ADD HOTEL DETAILS BY ID
export const addBooking = async (req, res) =>{
    try{
        const newBooking = new hotelBookingsModel(req.body)
        const booking = await newBooking.save()
        res.status(200).json(booking)

    }catch(err){
        res.status(401).json(err)
    }
}

export const deleteBooking = async (req,res) =>{
    try{
        await hotelBookingsModel.findByIdAndDelete(req.params.id)
        res.status(200).json("Booking Deleted Successfully")
    }
    catch(err){
        res.status(400).json(err)
    }
}

//GET ALL HOTELS
export const getAllBooking = async (req, res) => {
    const bookings = await hotelBookingsModel.find({"customer_id": req.params.customerId})
    res.status(200).json(bookings)
}
