import mongoose from 'mongoose';
import mongooseDelete from 'mongoose-delete';
import { createSlug } from '../common/index.js';
const Schema = mongoose.Schema;

const Category = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        slug: { type: String },
        status: { type: Boolean, default: true },
    },
    { timestamps: true }
);
Category.pre('save', function (next) {
    if (!this.slug) this.slug = createSlug(this.name);
    next();
});
Category.plugin(mongooseDelete, { deleteAt: true, overrideMethods: 'all' });

export default mongoose.model('Category', Category);
