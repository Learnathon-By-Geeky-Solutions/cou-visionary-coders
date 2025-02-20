import { Schema, model } from 'mongoose';
import { PersonalInfo } from '../interfaces/PersonalInfo.interface';
import connectDB from '../db/database.connection';

connectDB();
export const personalInfoSchema = new Schema<PersonalInfo>({
  biodataNo: { type: Number, required: true },
  biodataType: { type: String, required: true },
  maritalStatus: { type: String, required: true },
  birthDate: { type: String, required: true },
  height: { type: Number, required: true },
  weight: { type: Number, required: true },
  complexion: { type: String, required: true },
  bloodGroup: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    required: true,
  },
  nationality: { type: String, required: true },
  // =========================================================
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: { type: String, required: true, minlength: 6 },
  mobile: { type: String, required: true, unique: true, trim: true },
  address: {
    permanentAddress: {
      village: { type: String, required: true },
      subdistrict: { type: String, required: true },
      district: { type: String, required: true },
    },
    presentAddress: {
      village: { type: String, required: true },
      subdistrict: { type: String, required: true },
      district: { type: String, required: true },
    },
  },
  education: {
    ssc: {
      passingYear: { type: Number, required: true },
      group: { type: String, required: true },
      gpa: { type: Number, required: true },
    },
    hsc: {
      passingYear: { type: Number, required: true },
      group: { type: String, required: true },
      gpa: { type: Number, required: true },
    },
    university: {
      faculty: { type: String, required: true },
      department: { type: String, required: true },
      session: { type: String, required: true },
    },
  },
  familyInformation: {
    father: {
      aliveStatus: { type: Boolean, required: true },
      profession: { type: String, required: true },
    },
    mother: {
      aliveStatus: { type: Boolean, required: true },
      profession: { type: String, required: true },
    },
    siblings: {
      brotherInfo: {
        maritalStatus: { type: String, required: true },
      },
      sisterInfo: {
        maritalStatus: { type: String, required: true },
      },
      aboutSiblings: { type: String, required: true },
    },
    financialStatus: { type: String, required: true },
  },
  occupation: { type: String, required: true },
  occupationDescription: { type: String, required: true },
  expectedLifePartner: {
    age: {
      min: { type: Number, required: true },
      max: { type: Number, required: true },
    },
    complexion: { type: String, required: true },
    height: {
      min: { type: Number, required: true },
      max: { type: Number, required: true },
    },
    district: { type: String, required: true },
    maritalStatus: { type: String, required: true },
    profession: { type: String, required: true },
    financialCondition: { type: String, required: true },
    expectedQualities: { type: String, required: true },
  },
  guardiansMobileNumber: { type: String, required: true },
  candidateMobileNumber: { type: String, required: true },
  candidateEmail: { type: String, required: true },
});

const personalInfoModel = model<PersonalInfo>(
  'personalInfo',
  personalInfoSchema,
);
export default personalInfoModel;
