import BiodataStatistics from '../../components/BiodataStatistics';
import BiodataVisit from '../../components/BiodataVisit';
import Hero from '../../components/Hero';
import Instructions from '../../components/Instructions';

const pages = () => {
  return (
    <div>
      <Hero />
      <BiodataVisit />
      <BiodataStatistics />
      <Instructions />
    </div>
  );
};

export default pages;
