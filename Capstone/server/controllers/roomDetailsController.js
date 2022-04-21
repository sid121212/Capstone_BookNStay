import roomDetailsModel from "../models/roomDetailsModel.js"

//ADD ROOM DETAILS BY ID
export const addRoom = async (req, res) =>{
    try{
        const newRoom = new roomDetailsModel(req.body)
        const room = await newRoom.save()
        res.status(200).json(room)

    }catch(err){
        res.status(401).json(err)
    }
}

//UPDATE ROOM DETAILS BY ID
export const updateRoom = async (req, res) =>{
    try{
        const room = await roomDetailsModel.findById(req.params.roomId)
        if(req.params.roomId===req.body.room_id){
            try{
                updatedRoom = await roomDetailsModel.findOneAndUpdate(req.params.roomId, {
                    $set : req.body
                }, {new:true})
                res.status(200).json(updatedRoom)
            }
            catch(err){
                res.status(300).json(err)
            }
        }
        else{
            res.status(400).json("You can only Update your Room")
        }
    }catch(err){
        res.status(401).json(err)
    }
}

//DELETE ROOM DETAILS BY ID
export const deleteRoom = async (req,res) =>{
    const room = await roomDetailsModel.findById(req.params.roomId)
    if(req.body.room_id === req.params.roomId){
        try{
            await roomDetailsModel.findByIdAndDelete(req.params.roomId)
            res.status(200).json("Room Deleted Successfully")
        }
        catch(err){
            res.status(400).json(err)
        }
    }
    else{
        res.status(400).json("You can only delete your Room")
    }
}


// GET ALL ROOMS BY HOTEL ID
export const getAllRoom = async (req, res) => {
    const hotels = await roomDetailsModel.find({hotel_id: req.params.hotelId})
    res.status(200).json(hotels)
}