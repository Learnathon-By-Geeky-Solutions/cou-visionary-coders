import { model, Schema } from 'mongoose';
import connectDB from '../db/database.connection';
import { IUser } from '../interfaces/users.interface';
connectDB();
const usersSchema = new Schema<IUser>({
  username: { type: String, required: true, trim: true },
  phoneNumber: { type: String, required: true, trim: true, unique: true },
  email: { type: String, required: true, trim: true, unique: true },
  password: { type: String, required: true, trim: true },
});
const userModel = model<IUser>('User', usersSchema);
export default userModel;
