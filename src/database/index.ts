import Mongoose from 'mongoose';

const connectionDB = async () => {
    try {
        const conn = await Mongoose.connect(
            process.env.MONGO_URI || 'mongodb://mongodb:27017/ecosaracity');
        console.log(`MongoDB Connected: ${conn.connection.host}`);
        return conn;
    } catch (error: any) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}

export default connectionDB;