import mongoose from "mongoose";

export const ConnectDB = (mongoURL: string) => {
    mongoose.connect(mongoURL, {
        retryWrites: true,
        w: 'majority',
    })
        .then(() => console.log('MongoDB connected to ', mongoURL))
        .catch(err => console.log(err))
}