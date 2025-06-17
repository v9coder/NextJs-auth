import {connect} from "@/dbConfig/dbConfig"
import User from "@/models/userModel"
import { NextRequest, NextResponse } from "next/server"
import bcrypt from "bcryptjs"
import { error } from "console";


connect();


export async function POSt(request : NextRequest) {
    try {
        const reqBody = await request.json();
        const {username, email, password} = reqBody;

        console.log(reqBody);

        //check if user already exists
        const user = await User.findOne({email});

        if(user){
            return NextResponse.json({error: "User already exists"}, {status : 400})
        }

        //hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(password, salt);

        const newUser = new User({
            username,
            email,
            password
        })

        const savedUser = newUser.save();

        // //send verification email

        // await sendEmail({email, emailType: "VERIFY", userId: savedUser._id})

        return NextResponse.json({
            message : "User created successfully",
            status : 201,
            savedUser,
        })

    } catch (error : any) {
        return NextResponse.json(
            {error : error.message},
            {status : 500},
        )
    }
}