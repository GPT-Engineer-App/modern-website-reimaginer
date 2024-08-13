import React from 'react';

const PortfolioCompany = ({ name, logo, description, link }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={logo} alt={name} className="h-12 mb-2 mx-auto" />
      </a>
      <h4 className="font-semibold text-center mb-2">{name}</h4>
      <p className="text-sm text-gray-600 text-center">{description}</p>
    </div>
  );
};

export default PortfolioCompany;
