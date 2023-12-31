import connectDB from "@/middleware/mongoose";
import user from "@/models/user";
import CryptoJS from "crypto-js";

const handler = async (req, res) => {
  if (req.method == "POST") {
    let u = await user.findOne({ email: req.body.email });
    const pass = CryptoJS.AES.decrypt(u.password, process.env.JWT_SECRET_KEY);
    const decryptedPass = JSON.parse(pass.toString(CryptoJS.enc.Utf8));
    if (req.body.prePassword == decryptedPass) {
      const pass = CryptoJS.AES.encrypt(
        req.body.newPassword,
        process.env.JWT_SECRET_KEY,
      ).toString();
      const User = await user.findOneAndUpdate(
        { email: req.body.email },
        { password: pass },
      );
      res.status(200).json({ success: true });
    } else {
      res.status(400).json({ error: "Error" });
    }
  }
};

export default connectDB(handler); //To check whether connected to DB or not and then it is returned
