import { Response, NextFunction, Request } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { CustomRequest, DecodedToken } from '../interfaces/users.interface';

dotenv.config();

export const verifyToken = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const token = req.cookies.token;

    if (!token) {
      res.status(401).json({ message: 'Access denied' });
      return;
    }

    const secretKey = process.env.JWT_SECRET_KEY as string;
    if (!secretKey) {
      res.status(500).json({ message: 'Internal server error' });
      return;
    }

    const decoded = (await jwt.verify(token, secretKey)) as DecodedToken;
    (req as CustomRequest).user = decoded;
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: 'Invalid token' });
  }
};
