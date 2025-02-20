import Count from "./Count";

const BiodataStatistics: React.FC = () => {
  return (
    <>
      <h2 className="sectionheading">
        সেবা গ্রহীতার পরিসংখ্যান
      </h2>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-evenly gap-5 p-6">
        <Count
          imageSrc="src/assets/man.png"
          title="মোট পাত্রের বায়োডাটা"
          cnt={"Update soon"} // Or a number if you have the count
        />
        <Count
          imageSrc="src/assets/woman.png"
          title="মোট পাত্রীর বায়োডাটা"
          cnt={"Update soon"} // Or a number if you have the count
        />
        <Count
          imageSrc="src/assets/cpl.png"
          title="মোট পাত্র-পাত্রীর বায়োডাটা"
          cnt={"Update soon"} // Or a number if you have the count
        />
      </div>
    </>
  );
};

export default BiodataStatistics;
