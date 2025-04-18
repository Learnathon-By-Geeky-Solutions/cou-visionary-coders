import React from 'react';
import Count from './Count';
import manImg from '../assets/man.png';
import womenImg from '../assets/woman.png';
import couple from '../assets/cpl.png';

const BiodataStatistics: React.FC = () => {
  return (
    <>
      <h2 className="text-center text-xl sm:text-3xl rounded-full p-4 mx-4 my-2 sm:m-2 font-extrabold bg-indigo-900 text-white sm:w-1/2 sm:mx-auto">
        সেবা গ্রহীতার পরিসংখ্যান
      </h2>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-evenly gap-5 p-6">
        <Count
          imageSrc={manImg}
          title="মোট পাত্রের বায়োডাটা"
          cnt={'Update soon'} // Or a number if you have the count
        />
        <Count
          imageSrc={womenImg}
          title="মোট পাত্রীর বায়োডাটা"
          cnt={'Update soon'} // Or a number if you have the count
        />
        <Count
          imageSrc={couple}
          title="মোট পাত্র-পাত্রীর বায়োডাটা"
          cnt={'Update soon'} // Or a number if you have the count
        />
      </div>
    </>
  );
};

export default BiodataStatistics;
