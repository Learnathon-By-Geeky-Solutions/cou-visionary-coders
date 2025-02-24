import { Schema } from 'mongoose';
import { FamilyInfo } from '../interfaces/familyInfo.interface';

const guardianInfoSchema = new Schema({
  aliveStatus: { type: Boolean, required: true },
  profession: { type: String, required: true },
});

export const familyInfoSchema = new Schema<FamilyInfo>({
  father: { type: guardianInfoSchema, required: true },
  mother: { type: guardianInfoSchema, required: true },
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
});
