import express from 'express';
import { check, validationResult } from 'express-validator';
import { hash, genSalt, compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

const router = express.Router();

router.post("/signup",
    [
        check("username", 'Please enter a valid username')
            .not()
            .isEmpty(),
        check("email", "Please enter a valid email")
            .isEmail(),
        check('password', 'Please enter a valid password')
            .isLength({ min: 6 })


    ])
