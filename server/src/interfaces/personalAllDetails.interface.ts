import { EducationInfo } from './educationInfo.interface';
import { FamilyInfo } from './familyInfo.interface';
import { ExpectedLifePartner } from './lifePartner.interface';
import { ContactInfo } from './contactInfo.interface';
import { PersonalInfoo } from './PersonalInfo.interface';
import { AddressInfo } from './address.interface';
import { IUser } from './users.interface';
import { PersonalPreference } from './personalPreferenc.interface';

export type PesonalAllDetails = {
  users: IUser;
  personalInfo: PersonalInfoo;
  address: AddressInfo;
  education: EducationInfo;
  familyInformation: FamilyInfo;
  expectedLifePartner: ExpectedLifePartner;
  contactInfo: ContactInfo;
  personalPreference: PersonalPreference;
};
