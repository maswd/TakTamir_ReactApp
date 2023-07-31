import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Profile() {
  const user = useSelector((state) => state.user);
  const [isEditing, setIsEditing] = useState(false);
  const [items, setItems] = useState([]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    // TODO: ذخیره تغییرات
  };
  const handleAddItem = () => {
    const lastItem = items[items.length - 1];
    if (lastItem && lastItem.name === "") {
      return;
    }
    setItems([...items, { name: "" }]);
  };
  const handleItemChange = (index, event) => {
    const { name, value } = event.target;
    const list = [...items];
    list[index][name] = value;
    setItems(list.filter((item) => item.name !== ""));
  };
  return (
    <>
      <div className="mt-2 ">
        <div className=" col-md-10 col-lg-12 mx-auto mb-4 mb-lg-0">
          <div className="card shadow-lg" style={{ direction: "ltr" }}>
            <div className="row">
              <div className="col-12 col-md-4 ">
                <div
                  className="
                    text-center text-white h-100 relative"
                  style={{
                    borderTopLeftRadius: ".5rem",
                    borderTopRightRadius: ".5rem",
                    background:
                      "linear-gradient(to right bottom, rgba(246, 211, 101, 1), rgba(253, 160, 133, 1))",
                  }}
                >
                  <div className="mb-5 d-flex justify-content-start pl-3 pt-3 align-items-center ">
                    <Link to="/logout" className="mr-3">
                      <div className="shadow-sm border btn-circle text-light ">
                        <i className="fas fa-sign-out-alt "> </i>
                      </div>
                    </Link>
                    <div className="shadow bg-gradient-info btn-circle my-2 ">
                      <i className=" fas fa-info-circle  "> </i>
                    </div>
                  </div>
                  <img
                    src={user.profile_url}
                    alt="avatar"
                    className="img-fluid w-50"
                  />

                  <p className="h5 mt-3">
                    {isEditing ? (
                      <div className="d-flex w-75 mx-auto g-3">
                        <input
                          className="form-control form-control-user text-right"
                          type="text"
                          value={user.lastName}
                        />
                        <input
                          className="form-control form-control-user text-right"
                          type="text"
                          value={user.firstname}
                        />
                      </div>
                    ) : (
                      <>
                        {user.firstname} {user.lastName}
                      </>
                    )}
                  </p>
                  <p className="h6 my-3">حساب ذخیره : {user.wallet.balance}</p>
                  <div className="text-center mt-4">
                    {isEditing ? (
                      <button
                        className="btn btn-success mx-2"
                        onClick={handleSaveClick}
                      >
                        <i className="fa fa-save"></i>
                      </button>
                    ) : (
                      <button
                        className="btn btn-secondary mx-2"
                        onClick={handleEditClick}
                      >
                        <i className="fa fa-edit"></i>
                      </button>
                    )}
                  </div>
                </div>
              </div>
              <div className=" col-12 col-md-8 w-50 ">
                <div className="order-0 card-body p-4 w-100">
                  <div className="pb-3 border-bottom">
                    <span> 5 </span>
                    <span className="text-gray-900">: امتیاز شما (از 10)</span>
                  </div>
                  <h6 className="py-3  text-gray-900"> : تخصص ها </h6>
                  <div className="row pt-1 " style={{ direction: "rtl" }}>
                    {user.specialties.map((item, index) => (
                      <div className="col-4 mb-3" key={index}>
                        {isEditing ? (
                          <input
                            className="form-control form-control-user text-right"
                            type="text"
                            value={item.name}
                          />
                        ) : (
                          <p className="text-mutedborder-left-warning p-2">
                            {item.name}
                          </p>
                        )}
                      </div>
                    ))}
                    {isEditing && (
                      <div className="d-flex flex-wrap">
                        {items.map((item, index) => (
                          <div className="col-4 mb-3">
                            <input
                              key={index}
                              type="text"
                              className="form-control  form-control-user animated--grow-in"
                              id={`item-name-${index}`}
                              value={item.name}
                              onChange={(event) =>
                                handleItemChange(index, event)
                              }
                              name="name"
                            />
                          </div>
                        ))}
                        <button
                          type="button"
                          className=" btn shadow-sm btn-circle  "
                          onClick={handleAddItem}
                        >
                          <i className="fa fa-plus text-gray-900"></i>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
                <div className="d-flex border-top order-1 justify-content-around p-3">
                  <div className="text-left align-self-end">
                    <h5 className="h6 mt-4">
                      <span className="text-gray-900">کد تکنسین :</span>{" "}
                      {user.id}
                    </h5>
                  </div>
                  <img
                    src="/img/undraw_profile_re_4a55.svg"
                    className="w-50 my-3"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
