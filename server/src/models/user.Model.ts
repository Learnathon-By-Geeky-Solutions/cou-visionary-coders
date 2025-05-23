import { model, Schema } from 'mongoose';
import connectDB from '../db/database.connection';
import { IUser } from '../interfaces/users.interface';
connectDB();
const usersSchema = new Schema<IUser>(
  {
    username: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, unique: true },
    password: { type: String, required: true, trim: true },
    role: { type: String, default: 'user' },
    resetToken: { type: String, default: '' },
    tokenExpire: { type: Date, default: null },
  },
  {
    timestamps: true,
  },
);
const userModel = model<IUser>('User', usersSchema);
export default userModel;
