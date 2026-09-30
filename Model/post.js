import mongoose from "mongoose";
const postSchema = new mongoose.Schema({
    title: { type: String, required: true, unique: true, trim: true },
    description: { type: String, required: true, trim: true, maxlength: 150 },
    image:{type:[String]}
})
const Post = mongoose.model("Post", postSchema)
export default Post