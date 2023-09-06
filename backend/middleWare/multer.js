import multer from "multer";
import path from "path";

let Storage = multer.diskStorage({
  destination: "./public/uploads/",
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});

export const uploads = multer({
  storage: Storage,
  fileFilter: function (params, file, callback) {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpeg" ||
      file.mimetype == "image/jpg"
    ) {
      callback(null, true);
    } else {
      console.log("only jpg & png file supported !");
      callback(null, false);
    }
  },
});

