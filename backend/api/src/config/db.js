import mongoose from 'mongoose';

export async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/movie');
        console.log('Connected Successfully');
    } catch {
        console.log('Connected Fail');
    }
}
