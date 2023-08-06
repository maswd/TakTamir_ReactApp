import React from "react";
import CardAcceptTec from "./cards/CardAcceptTec";


const TableToCards = () => {
  const data = [
    {
      name: "Airi Satou",
      phoneNumber: "Accountant",
      specialties: "Tokyo",
      status: "رد کردن",
    },
    {
      name: "Angelica Ramos",
      phoneNumber: "Chief Executive Officer (CEO)",
      specialties: "London",
      status: "تایید کردن",
    },
    {
      name: "Ashton Cox",
      phoneNumber: "San Francisco",
      specialties: "66",
      status: "رد کردن",
    },
    {
      name: "Bradley Greer",
      phoneNumber: "London",
      specialties: "dd",
      status: "تایید کردن",
    },
  ];

  return (
    <div className="d-flex flex-wrap">
      {data.map((item, index) => (
        <CardAcceptTec key={index} {...item} />
      ))}
    </div>
  );
};

export default TableToCards;
