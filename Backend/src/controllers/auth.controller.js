import adminModel from "../models/Admin.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

// Token Generate
const generateToken = (id, role) => {
    return jwt.sign({id, role}, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN,
    });
};


/**
 * @description Register new user
 * @routes POST /api/auth/register
 * @access public
 * @body name email password
 */
export const register = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;


        const existingAdmin = await adminModel.findOne({email});
        if(existingAdmin) {
            return res.status(400).json({message: "Admin already exists with this email"})
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const admin = await adminModel.create({
            email,
            name,
            password: hashedPassword,
            role: role || "admin",
        });

        const token = generateToken(admin._id, admin.role);
        res.cookie("token", token)

        res.status(201).json({
            success: true,
            token,
            admin:{
                id: admin._id,
                name: admin.name,
                email: admin.email,
                role: admin.role,    
            },
        });

    } catch (error) {
          res.status(500).json({message: error.message});
    }
};

// Login
