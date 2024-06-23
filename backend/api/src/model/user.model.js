import mongoose from 'mongoose';
import mongooseDelete from 'mongoose-delete';
import bcrypt from 'bcrypt';
import { Level, Role } from '../constants/index.js';
const Schema = mongoose.Schema;

const History = new Schema({
    movie: { type: Schema.Types.ObjectId, ref: 'movie' },
    date: { type: Date },
});

const User = new Schema(
    {
        username: { type: String, unique: true },
        password: { type: String },
        name: { type: String, required: true },
        email: { type: String, unique: true, required: true },
        avatar: { type: String },
        history: [{ type: History }],
        role: { type: String, default: Role.User },
        level: { type: String, default: Level.Normal },
        dateVipUserExpired: { type: Date },
    },
    { timestamps: true }
);
User.plugin(mongooseDelete, { deleteAt: true, overrideMethods: 'all' });

User.post('validate', function (doc, next) {
    if (this.isModified('password')) {
        doc.password = bcrypt.hashSync(doc.password, 10);
    }
    return next();
});

User.methods.comparePassword = async function (password) {
    const user = this;
    return await bcrypt.compare(password, user.password);
};

export default mongoose.model('User', User);
