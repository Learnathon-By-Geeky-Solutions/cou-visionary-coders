// filepath: /e:/team project/cou/cou-visionary-coders/server/src/interfaces/Education.interface.ts
type AcademicRecord = {
  passingYear: number;
  group: string;
  gpa: number;
};

export type EducationInfo = {
  ssc: AcademicRecord;
  hsc: AcademicRecord;
  university: {
    faculty: string;
    department: string;
    session: string;
  };
};
