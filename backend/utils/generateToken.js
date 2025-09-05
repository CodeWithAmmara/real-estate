import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;
const generateToken = (userId, userEmail) => {
  return jwt.sign(
    { id:userId, email: userEmail }, // Payload
    JWT_SECRET, // Secret key
    { expiresIn: "1d" } // Expiry
  );
};

export default generateToken;
