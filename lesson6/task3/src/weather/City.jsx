import React from 'react';

const City = ({ city }) => {
  return (
    <li className="city">
      <span className="city__name">{city.name}</span>
      <span className="city__temperature">{`${city.temperature} F`}</span>
    </li>
  );
};
export default City;
