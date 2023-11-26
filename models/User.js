import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    userFullName: {
        type: String,
        require: true,
        unique: true
    },
    age: {
        type: Number
    },
    mobileNumber: {
        type: Number,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
        min: 0
    },
    
    isAdmin: {
        type: Boolean,
        default: false
    }
});

export default mongoose.model("User", UserSchema);