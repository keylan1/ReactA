import React from 'react';

// Task: The list should be sorted by calories in an ascending manner and any desserts with more than 500 calories should be excluded.

const DessertsList = (props) => {
  // filter, sort and map
  const filtered = props.data.filter((dessert) => dessert.calories < 500);
  const sorted = filtered.sort((a, b) => a.calories - b.calories);

  const listItems = sorted.map((dessert) => {
    const item = `${dessert.name} - ${dessert.calories} cal`;
    return <li>{item}</li>;
  });

  return (
    <div>
      <ul>{listItems}</ul>
    </div>
  );
};

export default DessertsList;
