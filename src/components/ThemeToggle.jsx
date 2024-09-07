import React from 'react';

const ThemeToggle = ({ dispatch }) => {
  return (
    <button onClick={() => dispatch({ type: 'TOGGLE_THEME' })} className="p-2 bg-blue-500 text-white rounded">
      Toggle Theme
    </button>
  );
};

export default ThemeToggle;


