import mongoose from 'mongoose';

const connectdb = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URL}/${db_name}`)
        console.log("connection Successful", connectionInstance);
    }
    catch (error) {
        console.log("error occured", error);
        process.exit(1);

    }
}
export default connectdb;