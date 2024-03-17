import mongoose from 'mongoose'

async function dbConnect() {
  try {
    await mongoose.connect(process.env.MONGO_DB)
    console.log('connect');

  } catch (error) {
    throw new Error('Connection failed!')
  }
}

export default dbConnect
