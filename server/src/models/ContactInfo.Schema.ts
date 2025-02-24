import { Schema } from 'mongoose';
import { ContactInfo } from '../interfaces/contactInfo.interface';

export const contactInfoSchema = new Schema<ContactInfo>({
  guardiansMobileNumber: { type: String, required: true },
  candidateMobileNumber: { type: String, required: true },
  candidateEmail: { type: String, required: true },
});
