import React, { useState } from 'react';

const Checkbox = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex items-center">
      {isChecked ? (
        <span className="text-green-600">Task finished</span>
      ) : (
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="h-5 w-5 focus:ring-indigo-500 border-gray-300 rounded"
        />
      )}
    </div>
  );
};

export default Checkbox;
