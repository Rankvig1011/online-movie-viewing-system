import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const Vote = new Schema(
    {
        movie: { type: Schema.Types.ObjectId, ref: 'Movie' },
        user: { type: Schema.Types.ObjectId, ref: 'User' },
        vote: { type: Number, default: 0 },
        status: { type: Boolean, default: true },
    },
    { timestamps: true }
);

export default mongoose.model('Vote', Vote);
