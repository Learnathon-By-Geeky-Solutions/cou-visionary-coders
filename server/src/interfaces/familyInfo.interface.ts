type GardianInfo = {
  aliveStatus: boolean;
  profession: string;
};

export type FamilyInfo = {
  father: GardianInfo;
  mother: GardianInfo;
  siblings: {
    brotherInfo: {
      maritalStatus: string;
    };
    sisterInfo: {
      maritalStatus: string;
    };
    aboutSiblings: string;
  };
  financialStatus: string;
};
