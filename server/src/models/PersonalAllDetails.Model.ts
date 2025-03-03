import { Schema, model } from 'mongoose';
import { IPersonalAllDetails } from '../interfaces/personalAllDetails.interface';
import { personalInfoSchema } from './personalInfo.Schema';
import { addressInfoSchema } from './AdressInfo.Schema';
import { educationInfoSchema } from './EducationalInfo.Schema';
import { familyInfoSchema } from './FamilyInfo.Schema';
import { expectedLifePartnerSchema } from './LifePartner.Schema';
import { contactInfoSchema } from './ContactInfo.Schema';
import { personalPreferenceSchema } from './PersonalPreference.Model';

const personalAllDetailsSchema = new Schema<IPersonalAllDetails>(
  {
    users: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    personalInfo: { type: personalInfoSchema, required: true },
    address: { type: addressInfoSchema, required: true },
    education: { type: educationInfoSchema, required: true },
    familyInformation: { type: familyInfoSchema, required: true },
    expectedLifePartner: { type: expectedLifePartnerSchema, required: true },
    contactInfo: { type: contactInfoSchema, required: true },
    personalPreference: { type: personalPreferenceSchema, required: true },
  },
  {
    timestamps: true,
  },
);

export const PersonalAllDetailsModel = model<IPersonalAllDetails>(
  'PersonalAllDetails',
  personalAllDetailsSchema,
);
