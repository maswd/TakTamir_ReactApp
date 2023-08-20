import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { ToRial } from "../../../../utils/convertor";

const CardCompleted = ({ fullname, phoneNumber, orders, userid, handle }) => {
  const totalDebt = orders.reduce(
    (accumulator, item) => accumulator + item.total,
    0
  );

  const [modalOpen, setModalOpen] = useState(false);
  const [taxPercentage, setTaxPercentage] = useState();
  const [itemTotal, setItemTotal] = useState();
  const [itemId, setItemId] = useState();
  const [darsadAmount, setDarsadAmount] = useState();
  const [userId, setUserId] = useState();
  const handleConfirm = async (e) => {
    e.preventDefault();
    handle(itemId, userId, taxPercentage);
    setModalOpen(false);
  };
  const handleCoast = (e) => {
    setTaxPercentage(e.target.value);
    setDarsadAmount(itemTotal * 0.6);
    let value = parseInt(e.target.value);
    value = Math.min(Math.max(value, 0), 100); // تبدیل به محدوده صفر تا صد
    const coast = value / 100;
    const total = itemTotal;
    setDarsadAmount(total * coast);
  };

  return (
    <div className="card bg-transparent border-0 mb-3 col-12 col-lg-6 col-xl-4">
      <div
        className={`card-body flex-column rounded shadow-sm d-flex justify-content-between border`}
      >
        <div className="mb-2">
          <h5 className="card-title text-gray-900">نام تکنسین: {fullname}</h5>
          <p className="card-text text-gray-900">شماره تماس: {phoneNumber}</p>
        </div>
        <div className="border-top">
          <p className="text-gray-900 mt-2">کار های انجام شده </p>
          <div style={{ maxHeight: "300px", overflowY: "auto" }}>
            {orders.map((item, i) => (
              <div
                key={i}
                className="d-flex justify-content-between align-items-center border-bottom"
              >
                <div className="d-flex w-100 g-3 justify-content-around align-items-center flex-wrap py-2">
                  <p className="text-right mb-2 text-sm col-sm-12">
                    نام مشتری: {item.nameCustomer}
                  </p>
                  <p className="text-right text-sm col-sm-12">
                    دریافت از مشتری : {ToRial(item.total?.toString())}{" "}
                    <small className="text-xs ">تومان</small>
                  </p>
                </div>
                <button
                  className="btn btn-info shadow-sm"
                  onClick={() => {
                    setModalOpen(true);
                    setItemTotal(item.total);
                    setItemId(item.orderId);
                    setUserId(userid);
                    setTaxPercentage(40);
                  }}
                >
                  تسویه
                </button>
              </div>
            ))}
          </div>

          <div className="text-right mt-3 border-right pr-3 text-gray-900">
            جمع کل: {ToRial(totalDebt.toString())}
            <small className="text-xs mx-1">تومان</small>
          </div>
        </div>
      </div>

      <Modal show={modalOpen} onHide={() => setModalOpen(false)}>
        <Modal.Header closeButton>
          <Modal.Title>تسویه حساب</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleConfirm}>
          <Modal.Body>
            <Form.Group controlId="taxPercentage">
              <Form.Label className="mb-2 d-block">
                درصد محاسبه از مبلغ دریافتی تکنسین :
              </Form.Label>

              <p className="d-inline font-weight-bold align-middle mt-2  fa-2x  mx-2">
                %
              </p>

              <Form.Control
                required
                type="number"
                className="w-25 d-inline"
                value={taxPercentage}
                onChange={(e) => handleCoast(e)}
              />
            </Form.Group>
            <div className="mt-5 text-lg">
              <p>
                مبلغ کل : {itemTotal && ToRial(itemTotal?.toString())}
                <small className="text-xs mx-1">تومان</small>
              </p>
              {!isNaN(darsadAmount) && darsadAmount && (
                <p className="py-3">
                  مبلغ کسر شده از تکنسین :{" "}
                  {darsadAmount &&
                    !isNaN(darsadAmount) &&
                    ToRial(darsadAmount?.toString())}
                  <small className="text-xs mx-1">تومان</small>
                </p>
              )}

              {darsadAmount ? (
                <p>
                  مبلغ دریافتی تکنسین : {""}
                  {darsadAmount && ToRial(itemTotal - darsadAmount?.toString())}
                  <small className="text-xs mx-1">تومان</small>
                </p>
              ) : (
                <p>
                  مبلغ دریافتی تکنسین : {""}
                  {ToRial(itemTotal * 0.6?.toString())}
                  <small className="text-xs mx-1">تومان</small>
                </p>
              )}
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setModalOpen(false)}>
              انصراف
            </Button>
            <Button type="submit" variant="primary">
              تایید
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
};

export default CardCompleted;
