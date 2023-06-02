import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <button className="">
      <FontAwesomeIcon
        icon={faArrowRight}
        className='text-lg font-light w-3 h-3 absolute -top-16 rounded-full right-3 md:right-9 p-2 border-2 border-black'
        onClick={onClick}
      />
    </button>
  );
};

export default CustomNextArrow;
