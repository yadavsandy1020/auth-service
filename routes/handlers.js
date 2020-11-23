import {validationResult} from 'express-validator';
import {genSalt, hash} from 'bcryptjs';
import {sign} from 'jsonwebtoken'
const User = require('../model/User')
export const signupHandler = async(req, res, next)=>{

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({
            errors: errors.array()
        })
    }

    const {username, email, password} = req.body;

    try {
        let user = await User.findOne({email});
        if(user){
            const message = `User already exists`;
            return res.status(400).json({
                message
            })
        }
        user = new User({
            username,
            password, 
            email
        })

        const salt = await genSalt(10);
        user.password = await hash(password, salt);
        await user.save();

        const payload = {
            user:{
                id: user.id
            }
        };

        sign(payload, "randomString", {expiresIn:10000}, (err,token)=>{
            if (err) throw new err;
            res.status(200).json({
                token
            })
        })
    } catch (error) {
        console.log(error.message);
       return res.status(500).json({
            message:'Error occured while saving the record.'
        });
    }

}