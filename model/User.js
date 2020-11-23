import mongoose from "mongoose";

export const UserSchema = mongoose.Schema({
    username: {
        type: String, 
        required: true
    },
    email:{
        type: String,
        required: true
    }, 
    password:{
        type: String,
        required:true
    },
    createdAt:{
        type: Date,
        default: Date.now()
    }
})