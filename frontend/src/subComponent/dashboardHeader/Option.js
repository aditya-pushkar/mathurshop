import React from "react";

import { Link } from "react-router-dom";

const Option = ({optionTitle, optionNavigate}) => {
  return (
    <div>
      <div
        className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
        role="menuitem"
      >
        <Link to={optionNavigate}>{optionTitle}</Link>
      </div>
    </div>
  );
};

export default Option;
