import mongoose from "mongoose";

let isConnected = false

export const connectToDB = async () => {
    mongoose.set('strictQuery', true)

    if(isConnected) return console.log('MongoDB is already connected');

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'share_propmt',
            useNewUrlPasler: true,
            useUnifiedTopology: true
        })

        console.log('MongoDB Connected');
    } catch (error) {
        console.log(error);
    }
}