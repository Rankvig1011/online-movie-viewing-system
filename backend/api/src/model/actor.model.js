import mongoose from 'mongoose';
import mongooseDelete from 'mongoose-delete';
const Schema = mongoose.Schema;

const Actor = new Schema(
    {
        name: {type: String, required: true },
        image: [{ type: String }],
        type: { type: Number},
    },
    { timestamps: true },
);

Actor.plugin(mongooseDelete, { deleteAt: true, overrideMethods: 'all' });


export default mongoose.model('Actor', Actor);