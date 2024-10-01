import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from "dotenv";
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET as string;


const authMiddleware = (req: Request, res: Response, next: NextFunction):void => {
    const authHeader = req.headers['authorization'];
    const token = req.cookies?.token;
    //const token = authHeader && authHeader.split(' ')[1]; // Assuming Bearer token
  
    if (!token) {
       res.status(401).json({ message: 'Access token missing' });
       return
    }
  
    try {
      const decoded = jwt.verify(token, JWT_SECRET);
      (req as any).user = decoded; // Attach user info to request object
      next();
    } catch (error) {
      res.status(403).json({ message: 'Invalid token' });
    }
  };
  
  export default authMiddleware;