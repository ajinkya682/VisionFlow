import jwt from "jsonwebtoken";

const protect = (req, res, next) => {
  try {
    // Cookie 
    let token = req.cookies?.token;

    if (!token && req.headers.authorization?.startsWith("Bearer ")) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      return res.status(401).json({ message: "Not authorized, please login" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded:", decoded);
    req.admin = decoded;
    next();

  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

export default protect;