import mongoose from "mongoose";

// export const connectDB=async()=>{
//     (await mongoose.connect('mongodb+srv://vidhisoni:dbvidhi24@cluster0.fymtxeb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')).then(()=>console.log("DB connected"));
// }

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://vidhisoni:dbvidhi24@cluster0.fymtxeb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
        console.log("DB connected");
    } catch (error) {
        console.error("DB connection failed:", error);
    }
};