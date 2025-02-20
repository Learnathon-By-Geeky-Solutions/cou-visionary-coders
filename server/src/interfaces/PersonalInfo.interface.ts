/** @format */

export type PersonalInfo = {
  biodataNo: number;
  biodataType: string;
  maritalStatus: string;
  birthDate: string;
  height: number;
  weight: number;
  complexion: string;
  bloodGroup: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  nationality: string;
  email: string;
  password: string;
  mobile: string;
  address: {
    permanentAddress: {
      village: string;
      subdistrict: string;
      district: string;
    };
    presentAddress: {
      village: string;
      subdistrict: string;
      district: string;
    };
  };
  education: {
    ssc: {
      passingYear: number;
      group: string;
      gpa: number;
    };
    hsc: {
      passingYear: number;
      group: string;
      gpa: number;
    };
    university: {
      faculty: string;
      department: string;
      session: string;
    };
  };
  familyInformation: {
    father: {
      aliveStatus: boolean;
      profession: string;
    };
    mother: {
      aliveStatus: boolean;
      profession: string;
    };
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

  occupation: string;
  occupationDescription: string;

  expectedLifePartner: {
    age: {
      min: number;
      max: number;
    };
    complexion: string;
    height: {
      min: number;
      max: number;
    };
    district: string;
    maritalStatus: string;
    profession: string;
    financialCondition: string;
    expectedQualities: string;
  };
  guardiansMobileNumber: string;
  candidateMobileNumber: string;
  candidateEmail: string;
};
