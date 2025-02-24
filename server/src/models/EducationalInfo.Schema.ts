import { Schema } from 'mongoose';
import { EducationInfo } from '../interfaces/educationInfo.interface';

const academicRecordSchema = new Schema({
  passingYear: { type: Number, required: true },
  group: { type: String, required: true },
  gpa: { type: Number, required: true },
});

export const educationInfoSchema = new Schema<EducationInfo>({
  ssc: { type: academicRecordSchema, required: true },
  hsc: { type: academicRecordSchema, required: true },
  university: {
    faculty: { type: String, required: true },
    department: { type: String, required: true },
    session: { type: String, required: true },
  },
});
