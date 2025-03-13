import React from 'react';
import { GardianInfo } from '../../interfaces/Biodata.interface';

interface GuardianInfoFormProps {
  label: string;
  guardian: GardianInfo;
  onChange: (updatedGuardian: GardianInfo) => void;
}

const GuardianInfoForm: React.FC<GuardianInfoFormProps> = ({
  label,
  guardian,
  onChange,
}) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value, type } = e.target;
    const newValue =
      type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;

    onChange({
      ...guardian,
      [name]: newValue,
    });
  };

  return (
    <div className="flex flex-col items-stretch sm:items-center sm:justify-center justify-stretch border border-gray-400  p-2 rounded-md shadow-lg">
      <h2
        className=" bg-violet-900 text-white my-4 py-2 px-6 shadow-sm outline  m-2 rounded-md text-center font-bold text-lg md:text-xl;
"
      >
        {label}
      </h2>

      <div className="flex flex-row items-stretch gap-4 border border-gray-400 p-2 rounded">
        <label className="flex items-center  space-x-2">
          <input
            type="checkbox"
            checked={guardian.aliveStatus}
            onChange={() => onChange({ ...guardian, aliveStatus: true })}
            className="accent-green-600 md:h-4 md:w-4"
          />
          <span className="md:text-lg font-semibold text-gray-700">জীবিত</span>
        </label>

        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={!guardian.aliveStatus}
            onChange={() => onChange({ ...guardian, aliveStatus: false })}
            className="accent-red-600 md:h-4 md:w-4"
          />
          <span className="md:text-lg font-semibold text-gray-700">মৃত</span>
        </label>
      </div>

      <label
        className="text-center text-sm md:text-xl font-semibold text-cyan-950 p-2 md:p-4 text-center;
"
      >
        পেশা{/* Profession */}
        <input
          type="text"
          name="profession"
          value={guardian.profession}
          onChange={handleChange}
          className="block w-full md:w-screen bg-gray-50 text-center font-bold  rounded-md border py-2 border-slate-500 sm:py-4 text-gray-600 shadow-lg ring-1 ring-inset ring-gray-300 focus:ring-2  focus:ring-pink-600 sm:max-w-xs sm:text-sm sm:leading-6;
 p-2 "
          placeholder="পেশা , বিবরণসহ"
        />
      </label>
    </div>
  );
};

export default GuardianInfoForm;
