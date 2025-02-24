import { Schema } from 'mongoose';
import { PersonalInfoo } from '../interfaces/PersonalInfo.interface';

export const personalInfoSchema = new Schema<PersonalInfoo>({
  biodataType: { type: String, required: true },
  maritalStatus: { type: String, required: true },
  birthDate: { type: String, required: true },
  height: { type: Number, required: true },
  weight: { type: Number, required: true },
  occupation: { type: String, required: true },
  complexion: { type: String, required: true },
  session: { type: String, required: true },
  department: { type: String, required: true },
  bloodGroup: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    required: true,
  },
  nationality: { type: String, required: true },
});
