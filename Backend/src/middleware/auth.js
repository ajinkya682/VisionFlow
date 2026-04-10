import jwt from "jsonwebtoken";


const protect = (req, res, next) =>{
  try {
    const token = req.cookies?.token;

    if(!token){
        return res.status(401).json({message: "Not authorizes, please login"});
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.admin = decoded;
    next();

  } catch (error) {
    return res.status(401).json({message: "Invalid or expired token"})
  }
};

export default protect

