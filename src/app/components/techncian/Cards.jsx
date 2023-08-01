import React from "react";
import Card from "./Card";
import { useState } from "react";

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
  // ایجاد یک آرایه جداگانه حاوی تمام حالت‌های status
  const statusOptions = [
    "همه",
    "در حال پردازش",
    "لغو شده",
    "تحویل داده شده",
    "حمل به کارگاه",
  ];

  // ایجاد دو state برای نگهداری حالت انتخاب شده در هر select
  const [statusFilter, setStatusFilter] = useState("همه");

  // فیلتر کردن آرایه cardsData بر اساس status انتخاب شده
  const filteredData = cardsData.filter((card) => {
    if (statusFilter === "همه") {
      return true;
    }
    return card.status === statusFilter;
  });

  // ایجاد select ها برای فیلتر کردن بر اساس status
  const statusSelects = statusOptions.map((statusOption) => (
    <option key={statusOption} value={statusOption}>
      {statusOption}
    </option>
  ));
  return (
    <>
      <div className="d-flex flex-wrap mt-2">
        {filteredData.map((data, index) => (
          <Card key={index} {...data} />
        ))}
      </div>
    </>
  );
}

export default Cards;
