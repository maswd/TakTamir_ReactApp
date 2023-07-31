import React from "react";
import Card from "./Card";

function Cards() {
  const cardsData = [
    {
      status: "حمل به کارگاه",
      user: {
        name: "احمدیان",
        address:
          "مازندران -مازندران -ساری -میدان امعلم -خیابان خرمشهر -پلاک ۲۰۰",
        totalIncome: "۲،۵۰۰،۰۰۰ تومان",
        totalExpense: "۱،۲۰۰،۰۰۰ تومان",
      },
      icon: "fa-truck",
      color: "warning",
    },
    {
      status: "در حال پردازش",
      user: {
        name: "نوری",
        address: "تهران - تهران - شهرک غرب - خیابان دادمان - پلاک ۲۰",
        totalIncome: "۴،۲۰۰،۰۰۰ تومان",
        totalExpense: "۳،۵۰۰،۰۰۰ تومان",
      },
      icon: "fa-clipboard-list",
      color: "primary",
    },
    {
      status: "تحویل داده شده",
      user: {
        name: "رضایی",
        address: "اصفهان - اصفهان - خیابان شریفی - پلاک ۱۰",
        totalIncome: "۱۰،۰۰۰،۰۰۰ تومان",
        totalExpense: "۸،۰۰۰،۰۰۰ تومان",
      },
      icon: "fa-truck-loading",
      color: "success",
    },
    {
      status: "لغو شده",
      user: {
        name: "محمدی",
        address: "تهران - تهران - میدان ونک - خیابان ملاصدرا - پلاک ۱۲",
        totalIncome: "۵۰۰،۰۰۰ تومان",
        totalExpense: "۰ تومان",
      },
      icon: "fa-times",
      color: "danger",
    },
  ];

  return (
    <div className="row mt-2">
      {cardsData.map((data, index) => (
        <Card key={index} {...data} />
      ))}
    </div>
  );
}

export default Cards;