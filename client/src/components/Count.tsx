import React from 'react';

interface CountProps {
  imageSrc: string;
  title: string;
  cnt: string;
}

const Count: React.FC<CountProps> = ({ imageSrc, title, cnt }) => {
  return (
    <div className="flex flex-col items-center justify-center border border-gray-300 p-6 basis-full rounded-lg shadow-sm hover:shadow-lg bg-gray-50">
      <img src={imageSrc} alt={title} className="w-auto h-24 mb-4" />
      <p className="font-bold text-xl text-blue-900 py-2">{title}</p>
      <h4 className="text-center bg-gray-200 rounded-lg font-bold text-violet-900 text-xl p-4">
        {cnt}
      </h4>
    </div>
  );
};

export default Count;
