import { Request, Response } from 'express';
import { userService } from '../services/users.service';
import { ILoginInfo, IUser } from '../interfaces/users.interface';

const createUser = async (req: Request, res: Response) => {
  try {
    const userInfo: IUser = req.body;
    //will call service function to send this data
    const result = await userService.createUserIntoDB(userInfo);
    //send response
    res.status(200).json({
      success: true,
      message: 'User registered successfully',
      data: result,
    });
  } catch (error) {
    if (error instanceof Error && error.message === 'User already exists!') {
      res.status(400).json({ message: 'User already exists!' });
    } else {
      console.error('Unexpected error:', error);
      res.status(500).json({
        message: 'An unexpected error occurred. Please try again later.',
      });
    }
  }
};

const loginUser = async (req: Request, res: Response) => {
  try {
    const loginInfo: ILoginInfo = req.body;

    const result = await userService.loginUserFromDB(loginInfo);

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

export const userController = {
  createUser,
  loginUser,
};
