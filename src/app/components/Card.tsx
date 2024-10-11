import React from 'react';

interface CardProps {
  title: string;
  date?: string;
  description: string;
  tags?: string[];
  liveDemo?: string;
  source?: string;
}

const Card: React.FC<CardProps> = ({ title, date, description, tags, liveDemo, source }) => {
  return (
    <div className="bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-lg p-6 rounded-lg transition-all duration-300 ease-in-out hover:translate-y-[-5px] hover:shadow-xl hover:shadow-gray-700/30">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      {date && <p className="text-sm text-gray-400 mb-2">{date}</p>}
      <p className="text-base text-gray-300 mb-4">{description}</p>
      {tags && (
        <div className="flex flex-wrap gap-2 mb-2">
          {tags.map((tag, index) => (
            <span key={index} className="px-2 py-1 bg-gray-800 rounded text-xs text-gray-300">#{tag}</span>
          ))}
        </div>
      )}
      {(liveDemo || source) && (
        <div className="flex space-x-4 text-sm">
          {liveDemo && <a href={liveDemo} className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer">Live </a>}
          {source && <a href={source} className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer">Source</a>}
        </div>
      )}
    </div>
  );
};

export default Card;