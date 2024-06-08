import mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const Status = {
    Like: 'like',
    Dislike: 'dislike',
};

const Reply = new Schema({
    userPost: { type: Schema.Types.ObjectId, ref: 'User' },
    userReply: { type: Schema.Types.ObjectId, ref: 'User' },
    content: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date },
});

const Interaction = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    type: { type: String },
});

const Comment = new Schema(
    {
        content: { type: String, required: true },
        user: { type: Schema.Types.ObjectId, ref: 'User' },
        movie: { type: Schema.Types.ObjectId, ref: 'Movie' },
        status: { type: Boolean, default: true },
        interaction: { type: Interaction },
        reply: [{ type: Reply }],
    },
    { timestamps: true }
);

export default mongoose.model('Comment', Comment);
