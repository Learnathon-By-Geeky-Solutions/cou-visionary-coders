import { Schema } from 'mongoose';
import { PersonalPreference } from '../interfaces/personalPreferenc.interface';

export const personalPreferenceSchema = new Schema<PersonalPreference>({
  hobbies: { type: String, required: true },
});
