import dbConnect from '@/lib/dbConnect'
import bcrypt from 'bcrypt';
import mongoose from 'mongoose';
import { NextResponse } from 'next/server';


const User = mongoose.models.Users || mongoose.model('Users', {
  email: String,
  firstname: String,
  lastname: String,
  password: String,
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
  bookmarks: Array,
  createdAt: Object,
  updatedAt: Object,
});

export async function POST(request){
        const { firstname, lastname, email, password } = req.body;
        await dbConnect()
        
        const existingUser = await User.findOne({ email });
   
        if (existingUser) {
            return NextResponse.json({ message: 'User already exists' }, { status: 400 });
          }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);


        const newUser = new User({
            email,
            firstname,
            lastname,
            password: hashedPassword,
            role: 'user',
            bookmarks: [],
            createdAt: new Date(),
            updatedAt: null,
        });

        await newUser.save();
        return NextResponse.json({ message: 'User created successfully' }, { status: 201 });


  
}