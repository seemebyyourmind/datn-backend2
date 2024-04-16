const cloudinary = require("../config/cloudinaryConfig");
const UploadImages = async (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ error: "No images uploaded" });
    }

    const uploadedImages = await Promise.all(
      req.files.map(async (file) => {
        const result = await cloudinary.uploader.upload(file.buffer, {
          folder: "uploaded-images",
          transformation: [{ width: 500, height: 500, crop: "limit" }],
        });

        return {
          public_id: result.public_id,
          secure_url: result.secure_url,
        };
      })
    );

    // Thực hiện các thao tác cần thiết sau khi upload thành công
    // Ví dụ: lấy thông tin của các file đã upload

    res.status(200).json({ success: "ok", uploadedImages });
  } catch (error) {
    console.error("Error uploading images:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { UploadImages };
