import React from 'react';
import { useState } from 'react';

const Categories = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const categories = ['All', 'Meat', 'Vegetarian', 'Grilled', 'Spicy', 'Closed'];

  const onClickCategory = (index) => {
    setActiveIndex(index);
  };
  return (
    <div className="categories">
      <ul>
        {categories.map((pizza, index) => (
          <li
            key={index}
            onClick={() => onClickCategory(index)}
            className={activeIndex === index ? 'active' : ''}>
            {pizza}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
