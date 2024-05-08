import mongoose from 'mongoose';
import mongooseDelete from 'mongoose-delete';
import { createSlug } from '../common/index.js';
const Schema = mongoose.Schema;



const Episode = new Schema(
    {
        name: {type: String, required: true },
        link: { type: String, required: true },
        movie: { type: Schema.Types.ObjectId, ref: 'Movie' },
        duration: { type: Number},
        durationStr: { type: String},
        coverImage: { type: String },
        animationImage: { type: String },
        slug: { type: String, required: true },
        alias: { type: String },
        typeVideo: { type: String },
        position: { type: Number },
        status: { type: Boolean, default: true },
    },
    { timestamps: true },
);
Episode.pre('save', function (next) {
    if(!this.slug)
        this.slug = createSlug(this.name);
    next();
});
Episode.plugin(mongooseDelete, { deleteAt: true, overrideMethods: 'all' });


export default mongoose.model('Episode', Episode);