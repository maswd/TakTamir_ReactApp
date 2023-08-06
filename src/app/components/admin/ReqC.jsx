import React from "react";
import CardAcceptTec from "./cards/CardAcceptTec";
import CardRequests from "./cards/CardRequests";


const TableToCards = () => {
  const data = [
    {
      name: "Airi Satou",
      phoneNumber: "Accountant",
      specialties: "Tokyo",
    },
    {
      name: "Angelica Ramos",
      phoneNumber: "Chief Executive Officer (CEO)",
      specialties: "London",
    },
    {
      name: "Ashton Cox",
      phoneNumber: "San Francisco",
      specialties: "66",
    },
    {
      name: "Bradley Greer",
      phoneNumber: "London",
      specialties: "dd",
    },
  ];

  return (
    <div className="d-flex flex-wrap">
      {data.map((item, index) => (
        <CardRequests key={index} {...item} />
      ))}
    </div>
  );
};

export default TableToCards;
