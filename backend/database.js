
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.MONGODB_URI);

const user=mongoose.Schema({
    nameOfOrg:String,
    email:String,
    feed:{ type: Array, default: [] },
});

const User=mongoose.model('User',user);

export default User;
