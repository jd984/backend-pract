import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    // Upload file to Cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    console.log("File uploaded successfully", response.url);
    // Remove the temporary file after successful upload
    fs.unlinkSync(localFilePath);
    return response;
  } catch (error) {
    console.error("Error uploading file to Cloudinary", error);
    try {
      // Remove the temporary file if upload fails
      fs.unlinkSync(localFilePath);
    } catch (unlinkError) {
      console.error("Error removing local file", unlinkError);
    }
    return null;
  }
};

export { uploadOnCloudinary };
