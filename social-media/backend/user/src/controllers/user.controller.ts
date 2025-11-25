import { publishToQueue } from "../config/rabbitmq.js";
import TryCatch from "../config/try.catch.js";
import { redisClient } from "../index.js";
import {randomInt } from 'crypto'
import { User } from "../model/user.model.js";
import { generateToken } from "../config/generate.token.js";
import type { authenticatedRequest } from "../middlewares/is.auth.middleware.js";
import { userInfo } from "os";

export const loginUser = TryCatch(async (req, res) => {
    const {email} = req.body;

    // create rate limits
    const rateLimitKey = `otp:ratelimit:${email}`
    const reateLimit = await redisClient.get(rateLimitKey);
    if(reateLimit) {
        return res.status(429).json({
            message: "Too many requests. Please wait before requesting new otp"
        })
    }

    const otp = String(randomInt(0, 1000000)).padStart(6, "9");

    const otpkey = `otp:${email}`;
    await redisClient.set(otpkey, otp, {EX: 300});
    await redisClient.set(rateLimitKey, "true", {EX: 60});

    const message = {
        to: email,
        subject: "Your otp code",
        body: `Your OTP is ${otp}. It is valid for 5 minutes`,
    }

    await publishToQueue("send-otp", message);

    res.status(200).json({
        message: "OTP sent to you mail"
    })
})


export const verifyUser = TryCatch(async(req, res)=> {
    const {email, otp:enteredOtp} = req.body;

    if(!email || !enteredOtp) {
        return res.status(400).json({
            message: "Email and OTP required"
        })
    }

    const otpKey = `otp:${email}`;
    const storedOTP = await redisClient.get(otpKey);

    if(!storedOTP || storedOTP !== enteredOtp) {
        return res.status(400).json({
            message: "Invalid or expired OTP"
        })
    }

    await redisClient.del(otpKey);


    let user = await User.findOne({email});

    if(!user) {
        const name = email.slice(0,8);
        user = await User.create({name, email})
    }

    const token = generateToken(user);

    res.json({
        message: "User verified",
        user,
        token
    })
})


export const myProfile = TryCatch(async(req: authenticatedRequest, res) => {
    const user = req.user;

    res.json(user);
})

export const updateName = TryCatch(async(req: authenticatedRequest, res) => {
    const user = await User.findById(req.user?._id);

    if(!user) {
        res.status(404).json({
            message: "Please login"
        })
        return;
    }

    user.name = req.body.name;

    await user.save();

    const token = generateToken(user);

    res.json({
        message: "User updated",
        user,
        token
    });
})

export const getAllUser = TryCatch(async (req: authenticatedRequest, res)=> {
    const users = await User.find();

    res.json(users);
})

export const getAUser = TryCatch(async (req: authenticatedRequest, res)=> {
    const user = await User.findById(req.params.id);

    res.json(user);
})