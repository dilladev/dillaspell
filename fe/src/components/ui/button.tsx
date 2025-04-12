import React from 'react';

export const Button = ({ children, ...props }) => (
  <button className="bg-blue-500 text-white px-4 py-2 rounded" {...props}>
    {children}
  </button>
);
