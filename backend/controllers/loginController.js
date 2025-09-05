import UserModel from "../models/userModel.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/generateToken.js";
export const login = async (req, res) => {
     const { email, password } = req.body;

  try {

    // Check if user exists
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "❌ User not found" });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "❌ Invalid credentials" });
    }

    // Generate token
    const token = generateToken(user._id, user.email);

    // Store token in cookie
    res.cookie("token", token, {
      httpOnly: true,
       secure: process.env.NODE_ENV === "production", // true only on production (HTTPS)
          sameSite: "Strict",
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });

    return res.status(200).json({
      message: "✅ Login successful",
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
      token,
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({
      message: "error occur in login",
      error: error.message,
    });
  }
};
