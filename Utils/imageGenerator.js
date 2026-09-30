import multer from "multer";
const fileFilter = (req, file, cb) => {
    const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg']
    if (allowedTypes.includes(file.mimetype)) {
    cb(null,true)
    } else {
    cb(new Error("only jpeg,jpg and png are allowed",false))
    }
}
const upload = multer({
    storage: multer.memoryStorage(),
    fileFilter,
    limits: {
    fileSize:2*1024*1024
    }
})
export default upload