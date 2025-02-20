import React from 'react';
import Card from "./Card";

const Instructions: React.FC = () => {
    return (
        <>
            <h2 className="sectionheading">
                আমাদের ওয়েবসাইট যেভাবে কাজ করে
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-evenly gap-5 p-6">
                <Card
                    imageSrc="src/assets/member.png"
                    title="বায়োডাটা তৈরী করুন"
                    description="খুব সহজেই বিনামূল্যে আমাদের সাইটে বায়োডাটা তৈরী করতে পারবেন।"
                />
                <Card
                    imageSrc="src/assets/search.png"
                    title="বায়োডাটা খুজুন"
                    description="বিভিন্ন ফিল্টার ব্যবহার করে আপনি বায়োডাটা খুজতে পারবেন।"
                />
                <Card
                    imageSrc="src/assets/call.png"
                    title="যোগাযোগ করুন"
                    description="আপনার বায়োডাটা কেউ পছন্দ করলে অথবা আপনি কারো বায়োডাটা পছন্দ করলে সরাসরি অভিভাবকের সাথে যোগাযোগ করতে পারবেন।"
                />
                <Card
                    imageSrc="src/assets/ring.png"
                    title="বিবাহ সম্পন্ন করুন"
                    description="বায়োডাটা ও কথাবার্তা পছন্দ হলে নিজ দায়িত্বে ভালোভাবে খোজ খবর নিয়ে বিবাহ সম্পূর্ণ করুন।"
                />
            </div>
        </>
    );
};

export default Instructions;