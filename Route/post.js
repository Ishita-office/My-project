import { Router } from 'express'
import Post from '../Model/post.js';
import upload from '../Utils/imageGenerator.js';
import path from 'path'
import fs from 'fs/promises'
const postRoute = Router()
postRoute.post("/add-post", upload.array("image", 8), async (req, res) => {
    const { title, description } = req.body;
    if (req.files.length===0) {
    return res.status(400).json({msg:"minimum one image is required"})
    }
    const existedPost = await Post.findOne({ title })
    if (existedPost) {
    return res.status(200).json({msg:"Post title already existed"})
    }
    let filenames=null
    if (req.files) {
    filenames=req.files.map((item) => {
        const originalName = item.originalname.replace(/\s+/g, '-').replace(/[^a-zA-Z0-9.-]/g, '')
        const timestamp = Date.now()
        return `${timestamp}-${originalName}`
    })
    }
    const newPost = new Post({
        title,
        description,
        image:filenames
    })
    await newPost.save()
        if (req.files.length>0) {
            req.files.forEach((item, ind) => {
                const uploadPath = path.join(process.cwd(), "Upload", "post", filenames[ind])
                fs.writeFile(uploadPath,item.buffer)
          });
        }
    return res.status(201).json({ msg: "post created successfully" })

})
postRoute.get("/all-post", async (req, res) => {
    const { page = 1, pageSize = 5 } = req.query
    const posts = await Post.find().skip((page - 1) * pageSize).limit(pageSize).sort({ _id: -1 })
    return res.status(200).json({data:posts})
})
export default postRoute