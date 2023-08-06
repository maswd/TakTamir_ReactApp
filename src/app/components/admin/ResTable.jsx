import React from "react";
import CardWorkers from './cards/CardWorkers'


const TableToCards = () => {
  const data = [
    {
      name: "Airi Satou",
      position: "Accountant",
      location: "Tokyo",
      isEmployed: true,
    },
    {
      name: "Angelica Ramos",
      position: "Chief Executive Officer (CEO)",
      location: "London",
      isEmployed: false,
    },
    {
      name: "Ashton Cox",
      position: "San Francisco",
      location: "66",
      isEmployed: false,
    },
    {
      name: "Bradley Greer",
      position: "London",
      location: "dd",
      isEmployed: true,
    },
  ];

  return (
    <div className="d-flex flex-wrap">
      {data.map((item, index) => (
        <CardWorkers key={index} {...item} />
      ))}
    </div>
  );
};

export default TableToCards;
