import mongoose from "mongoose";

const connectDB = async () => {
    const url = process.env.MONGO_URL;

    if(!url) {
        throw new Error("MONGO_URL is not defined in environment variables");
    }

    try {
        await mongoose.connect(url, {
            dbName: "chatappmicroserviceapp"
        });

        console.log("Connected to mongodb")

    }catch(e) {
        console.error("Failed to connect to Mongodb ", e);
        process.exit(1)
    }
}

export default connectDB;