import React from "react";
import CardWorks from "./cards/CardWorks";

const TableToCards = ({ jobs }) => {
  const data = jobs;

  return (
    <div className="d-flex flex-wrap mx-auto">
      {data.map((item, index) => (
        <CardWorks key={index} {...item} />
      ))}
    </div>
  );
};

export default TableToCards;
