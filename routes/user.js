import express from 'express';
import { check } from 'express-validator';
import {signupHandler} from './handlers'

export const router = express.Router();

router.post("/signup",
    [
        check("username", 'Please enter a valid username')
            .not()
            .isEmpty(),
        check("email", "Please enter a valid email")
            .isEmail(),
        check('password', 'Please enter a valid password')
            .isLength({ min: 6 })


    ], signupHandler)


    module.exports = router;