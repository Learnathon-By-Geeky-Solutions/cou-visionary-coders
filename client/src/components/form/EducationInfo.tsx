import { ChangeEvent } from 'react';
import {
  EducationInfoData,
  AcademicRecord,
  UniversityRecord,
} from '../../interfaces/Biodata.interface';

interface EducationInfoProps {
  formData: EducationInfoData;
  setFormData: (formData: EducationInfoData) => void;
}

const departments = [
  'Computer Science',
  'Electrical Engineering',
  'Mechanical Engineering',
  'Civil Engineering',
  'Business Administration',
  'Economics',
  'Physics',
  'Mathematics',
  'English',
  'Law',
];

function AcademicDetails({
  section,
  formData,
  setFormData,
}: {
  section: 'ssc' | 'hsc';
  formData: EducationInfoData;
  setFormData: (data: EducationInfoData) => void;
}) {
  const handleChange = (
    e: ChangeEvent<HTMLSelectElement | HTMLInputElement>,
    field: keyof AcademicRecord,
  ) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      [section]: {
        ...formData[section],
        [field]: field === 'passingYear' ? parseInt(value) : value,
      },
    });
  };

  return (
    <div className="w-full flex flex-col items-stretch justify-stretch">
      <h2 className="bg-violet-900 text-white my-4 py-2 px-6 shadow-sm outline  m-2 rounded-md text-center font-bold text-lg md:text-xl">
        {section.toUpperCase()}
      </h2>
      <label
        className="text-center  text-sm md:text-xl font-semibold text-cyan-950 p-2 md:p-4 text-center;
 mt-1"
      >
        জিপিএ
        <input
          type="number"
          step="0.01"
          min="1.00"
          max="5.00"
          value={formData[section].gpa}
          onChange={(e) => handleChange(e, 'gpa')}
          className="block w-full md:w-screen bg-gray-50 text-center font-bold  rounded-md border py-2 border-slate-500 sm:py-4 text-gray-600 shadow-lg ring-1 ring-inset ring-gray-300 focus:ring-2  focus:ring-pink-600 sm:max-w-xs sm:text-lg sm:leading-6
 p-2"
          placeholder="যেমনঃ 3.21"
        />
      </label>
      <label
        className="text-center text-sm md:text-xl font-semibold text-cyan-950 p-2 md:p-4 text-center;
 mt-1"
      >
        পাশের সন
        <select
          value={formData[section].passingYear}
          onChange={(e) => handleChange(e, 'passingYear')}
          className="block w-full md:w-screen bg-gray-50 text-center font-bold  rounded-md border py-2 border-slate-500 sm:py-4 text-gray-600 shadow-lg ring-1 ring-inset ring-gray-300 focus:ring-2  focus:ring-pink-600 sm:max-w-xs sm:text-lg sm:leading-6;
 p-2"
        >
          <option value="">Select Year</option>
          {Array.from({ length: 21 }, (_, i) => 2005 + i).map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </label>
      <label
        className=" text-center   text-sm md:text-xl font-semibold text-cyan-950 p-2 md:p-4 text-center;
 mt-1"
      >
        গ্রুপ
        <select
          value={formData[section].group}
          onChange={(e) => handleChange(e, 'group')}
          className="block w-full md:w-screen bg-gray-50 text-center font-bold  rounded-md border py-2 border-slate-500 sm:py-4 text-gray-600 shadow-lg ring-1 ring-inset ring-gray-300 focus:ring-2  focus:ring-pink-600 sm:max-w-xs sm:text-lg sm:leading-6;
 p-2"
        >
          <option value="">Select Group</option>
          <option value="Science">Science</option>
          <option value="Commerce">Commerce</option>
          <option value="Arts">Arts</option>
        </select>
      </label>
    </div>
  );
}

function UniversityDetails({
  section,
  formData,
  setFormData,
}: {
  section: 'honours' | 'masters';
  formData: EducationInfoData;
  setFormData: (data: EducationInfoData) => void;
}) {
  const handleChange = (
    e: ChangeEvent<HTMLSelectElement>,
    field: keyof UniversityRecord,
  ) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      university: {
        ...formData.university,
        [section]: {
          ...formData.university[section],
          [field]: value,
        },
      },
    });
  };

  return (
    <div className="w-full flex flex-col items-stretch justify-stretch">
      <h2 className="bg-violet-900 text-white my-4 py-2 px-6 shadow-sm outline  m-2 rounded-md text-center font-bold text-lg md:text-xl">
        বিশ্ববিদ্যালয় ({section === 'honours' ? 'অনার্স' : 'মাস্টার্স'})
      </h2>
      <label
        className=" text-center   text-sm md:text-xl font-semibold text-cyan-950 p-2 md:p-4 text-center;
 mt-1"
      >
        অনুষদ {''}
        <select
          value={formData.university[section]?.faculty || ''}
          onChange={(e) => handleChange(e, 'faculty')}
          className="block w-full md:w-screen bg-gray-50 text-center font-bold  rounded-md border py-2 border-slate-500 sm:py-4 text-gray-600 shadow-lg ring-1 ring-inset ring-gray-300 focus:ring-2  focus:ring-pink-600 sm:max-w-xs sm:text-lg sm:leading-6;
 p-2"
        >
          <option value="">Select Faculty</option>
          <option value="Engineering">Engineering</option>
          <option value="Business">Business</option>
          <option value="Science">Science</option>
          <option value="Arts">Arts</option>
        </select>
      </label>
      <label
        className="  text-center  text-sm md:text-xl font-semibold text-cyan-950 p-2 md:p-4 text-center;
 mt-1"
      >
        বিভাগ
        <select
          value={formData.university[section]?.department || ''}
          onChange={(e) => handleChange(e, 'department')}
          className="block w-full md:w-screen bg-gray-50 text-center font-bold  rounded-md border py-2 border-slate-500 sm:py-4 text-gray-600 shadow-lg ring-1 ring-inset ring-gray-300 focus:ring-2  focus:ring-pink-600 sm:max-w-xs sm:text-lg sm:leading-6;
 p-2"
        >
          <option value="">Select Department</option>
          {departments.map((department) => (
            <option key={department} value={department}>
              {department}
            </option>
          ))}
        </select>
      </label>
      <label
        className="  text-center  text-sm md:text-xl font-semibold text-cyan-950 p-2 md:p-4 text-center;
 mt-1"
      >
        সেশন
        <select
          value={formData.university[section]?.session || ''}
          onChange={(e) => handleChange(e, 'session')}
          className="block w-full md:w-screen bg-gray-50 text-center font-bold  rounded-md border py-2 border-slate-500 sm:py-4 text-gray-600 shadow-lg ring-1 ring-inset ring-gray-300 focus:ring-2  focus:ring-pink-600 sm:max-w-xs sm:text-lg sm:leading-6;
 p-2 mb-4"
        >
          <option value="">Select Session</option>
          {Array.from({ length: 19 }, (_, i) => 2006 + i).map((year) => (
            <option
              key={year}
              value={`${year}-${year + 1}`}
            >{`${year}-${year + 1}`}</option>
          ))}
        </select>
      </label>
    </div>
  );
}

function EducationInfo({
  formData,
  setFormData,
}: Readonly<EducationInfoProps>) {
  return (
    <div className="w-full h-full border border-gray-400 bg-purple-50 rounded-md  shadow-lg md:m-4">
      <div className="flex flex-col items-stretch md:items-center justify-center p-2 ">
        <h2
          className="bg-pink-600 text-white py-2 px-6 shadow-sm outline outline-pink-600  outline-offset-2  m-2 rounded-md text-center font-bold text-xl md:text-2xl
"
        >
          শিক্ষাগত তথ্য
        </h2>
        <form className="items-center justify-center w-full md:w-auto bg-white border-pink-600 p-2 md:px-28 my-4 rounded-md border shadow-lg hover:shadow-lg flex flex-col gap-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 w-full">

          <AcademicDetails
            section="ssc"
            formData={formData}
            setFormData={setFormData}
          />
          <AcademicDetails
            section="hsc"
            formData={formData}
            setFormData={setFormData}
          />
          
          <UniversityDetails
            section="honours"
            formData={formData}
            setFormData={setFormData}
          />
      
          <UniversityDetails
            section="masters"
            formData={formData}
            setFormData={setFormData}
          />
          </div>
        </form>
      </div>
    </div>
  );
}

export default EducationInfo;
