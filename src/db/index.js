import mongoose from 'mongoose';
import { db_name } from '../constants.js'
const connectdb = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${db_name}`)
        console.log(" hey anu the database connection is Successful at", connectionInstance.connection.host);
    }
    catch (error) {
        console.log(" hey anu A MONGODB error occured", error);
        process.exit(1);

    }
}
export default connectdb;