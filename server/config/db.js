const mongoose = require('mongoose');
const connectDB = async() => {
    try {
        mongoose.set('strictQuery', false);
        const conn = await mongoose.connect("mongodb+srv://admin:Classified.123@cluster0.bhtedtp.mongodb.net/logistiks?retryWrites=true&w=majority");
        console.log(`Database Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
    }
}



module.exports = connectDB;