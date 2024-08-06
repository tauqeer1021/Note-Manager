import mongoose from "mongoose";


const DbCon = async() => {
    try {
        mongoose.connect(process.env.MONGODB_URL)
        console.log("mongodb is connected")
    } catch (error) {
        console.log("error in mongodb connection", error)
    }
}

export default DbCon;