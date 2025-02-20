import { Request, Response } from 'express';
import { userService } from '../services/users.service';

const loginWithGoogle = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    if (!email) {
      res.status(400).json({ message: 'Email is required' });
    }
    const result = await userService.loginOrCreateUserWithGoogle(email);
    //set the token as an httpOnly cookie
    res.cookie('token', result, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production' ? true : false,
      sameSite: 'strict',
      maxAge: 3600000, // 1 hour
    });
    res.status(200).json({
      success: true,
      message: 'User logged in successfully',
    });
  } catch (error) {
    console.error('Unexpected error:', error);
    res.status(500).json({
      message: 'An unexpected error occurred. Please try again later.',
    });
  }
};

export const authController = {
  loginWithGoogle,
};
