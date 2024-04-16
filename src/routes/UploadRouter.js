const express = require("express");
const router = express.Router();
const UploadController = require("../controllers/UploadControler");
const multer = require("multer");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now());
  },
});

var upload = multer({ storage: storage });

router.post(
  "/update",
  upload.array("images", 4),
  UploadController.UploadImages
);

module.exports = router;
