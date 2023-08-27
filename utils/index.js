import mongoose from 'mongoose';
let isConnectedToDB = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);
    if (isConnectedToDB) {
        console.log("Already Connected to DataBase!");
        return;
    };
    try {
        await mongoose.connect(process.env.MONGO_DB_URI, {
            dbName: 'aligarh',
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        isConnectedToDB = true
        console.log("MongoDB Connected!")
    } catch (error) {
        console.log(error);
    }
}