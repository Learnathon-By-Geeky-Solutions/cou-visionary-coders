import React from 'react';
import Card from './Card';
import member from '../../src/assets/member.png';
import search from '../../src/assets/search.png';
import call from '../../src/assets/call.png';
import ring from '../../src/assets/ring.png';

const Instructions: React.FC = () => {
  return (
    <>
      <h2 className="text-center text-xl sm:text-3xl rounded-full p-4 mx-4 my-2 sm:m-2 font-extrabold bg-indigo-900 text-white sm:w-1/2 sm:mx-auto">
        আমাদের ওয়েবসাইট যেভাবে কাজ করে
      </h2>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-evenly gap-5 p-6">
        <Card
          imageSrc={member}
          title="বায়োডাটা তৈরী করুন"
          description="খুব সহজেই বিনামূল্যে আমাদের সাইটে বায়োডাটা তৈরী করতে পারবেন।"
        />
        <Card
          imageSrc={search}
          title="বায়োডাটা খুজুন"
          description="বিভিন্ন ফিল্টার ব্যবহার করে আপনি বায়োডাটা খুজতে পারবেন।"
        />
        <Card
          imageSrc={call}
          title="যোগাযোগ করুন"
          description="আপনার বায়োডাটা কেউ পছন্দ করলে অথবা আপনি কারো বায়োডাটা পছন্দ করলে সরাসরি অভিভাবকের সাথে যোগাযোগ করতে পারবেন।"
        />
        <Card
          imageSrc={ring}
          title="বিবাহ সম্পন্ন করুন"
          description="বায়োডাটা ও কথাবার্তা পছন্দ হলে নিজ দায়িত্বে ভালোভাবে খোজ খবর নিয়ে বিবাহ সম্পূর্ণ করুন।"
        />
      </div>
    </>
  );
};

export default Instructions;
