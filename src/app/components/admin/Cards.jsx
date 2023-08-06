import React from 'react';
import CardWorks from './cards/CardWorks';

const Card = ({ name, status, technician, description }) => {
  const getStatusClass = (status) => {
    switch (status) {
      case 'انجام شده':
        return 'success';
      case 'کنسل شده':
        return 'danger';
      case 'حمل به کارگاه':
        return 'primary';
      case 'کار زمان بالا':
        return 'warning';
      case 'در حال انجام':
        return 'info';
      default:
        return '';
    }
  };

  return (
    <div className={`card mb-4 border-${getStatusClass(status)}`}>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <div className={`btn btn-${getStatusClass(status)} btn-icon-split mb-3`}>
          <span className="text text-nowrap">{status}</span>
        </div>
        <p className="card-text">تکنسین: {technician}</p>
        <p className="card-text">توضیحات: {description}</p>
      </div>
    </div>
  );
};

const TableToCards = () => {
  const data = [
    { name: 'Airi Satou', status: 'انجام شده', technician: 'Accountant', description: 'Tokyo' },
    { name: 'Angelica Ramos', status: 'کنسل شده', technician: 'Chief Executive Officer (CEO)', description: 'London' },
    { name: 'Ashton Cox', status: 'حمل به کارگاه', technician: 'San Francisco', description: '66' },
    { name: 'Bradley Greer', status: 'کار زمان بالا', technician: 'London', description: 'dd' },
    { name: 'Bradley Greer', status: 'در حال انجام', technician: 'London', description: 'dd' },
  ];

  return (
    <div className="d-flex flex-wrap mx-auto">
      {data.map((item, index) => (
        <CardWorks key={index} {...item} />
      ))}
    </div>
  );
};

export default TableToCards;