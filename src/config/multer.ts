import multer from "multer";

export const upload = multer({
  storage: multer.diskStorage({}),
  fileFilter(req, file, callback) {
    const allowed = ["image/jpeg", "image/jpg", "image/png"];
    callback(null, allowed.includes(file.mimetype));
  },
  limits: {
    fileSize: 20000000,
  },
});
