import { Schema } from 'mongoose';
import { ExpectedLifePartner } from '../interfaces/lifePartner.interface';

const ageHeightSchema = new Schema({
  min: { type: Number, required: true },
  max: { type: Number, required: true },
});

export const expectedLifePartnerSchema = new Schema<ExpectedLifePartner>({
  age: { type: ageHeightSchema, required: true },
  complexion: { type: String, required: true },
  height: { type: ageHeightSchema, required: true },
  district: { type: String, required: true },
  maritalStatus: { type: String, required: true },
  profession: { type: String, required: true },
  financialCondition: { type: String, required: true },
  expectedQualities: { type: String, required: true },
});
