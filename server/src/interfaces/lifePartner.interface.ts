type AgeHeightLimit = {
  min: number;
  max: number;
};

export type ExpectedLifePartner = {
  age: AgeHeightLimit;
  complexion: string;
  height: AgeHeightLimit;
  district: string;
  maritalStatus: string;
  profession: string;
  financialCondition: string;
  expectedQualities: string;
};
