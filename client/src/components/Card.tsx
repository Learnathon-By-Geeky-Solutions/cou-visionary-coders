import PropTypes from 'prop-types';

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, title, description }) => {
  return (
    <div className="flex flex-col items-center justify-center border border-gray-300 p-6 basis-full md:h-80 rounded-md shadow-lg hover:shadow-xl hover:bg-pink-100 bg-gray-50">
      <img src={imageSrc} alt="Card Image" className="w-24 h-24 mb-4" />
      <h2 className="font-bold text-xl text-blue-900">{title}</h2>
      <p className="text-gray-600 text-center text-sm p-2">{description}</p>
    </div>
  );
};

Card.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;