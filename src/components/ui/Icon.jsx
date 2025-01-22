import React from 'react';

const Icon = ({ name, className }) => {
  return (
    <i className={`${name} ${className}`} />
  );
};

export default Icon;
