import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { registerUser } from "../../services/userService";

function Profile() {
  const user = useSelector((state) => state.user);
  const [isEditing, setIsEditing] = useState(false);
  const [editUser, setEditUser] = useState(user);
  const [newSpecialty, setNewSpecialty] = useState("");

  const handleAddItem = () => {
    if (newSpecialty.trim() === "") {
      alert("Please enter a specialty name.");
      return;
    }
    const newItem = {  name: newSpecialty };
    setEditUser({
      ...editUser,
      specialties: [...editUser.specialties, newItem],
    });
    setNewSpecialty("");
  };

  const handleItemChange = (id, e) => {
    const newItems = editUser.specialties.map((item, index) => {
      if (index === id) {
        return { ...item, name: e.target.value };
      }
      return item;
    });
    setEditUser({ ...editUser, specialties: newItems });

    if (e.target.value.trim() === "" || e.target.value.length === 0) {
     setTimeout(() => {
      handleItemDelete(id);
     }, 1000);
    }
  };
  const handleItemDelete = (id) => {
    const newItems = editUser.specialties.filter((_, index) => index !== id);
    setEditUser({ ...editUser, specialties: newItems });
  };

  const handleSave = async () => {
    const user = {
      firstname: editUser.firstname,
      lastName: editUser.lastName,
      profile_url: editUser.profile_url,
      email: editUser.email,
      serialNumber: editUser.serialNumber,
      specialties: editUser.specialties,
    };
    try {
      // dispatch(showLoading());

      const res = await registerUser(user);
      console.log(res);
      // if (status === 200) {
      //   const token = localStorage.getItem("access_token");
      //   const { data: user } = await getProfile(token);
        // dispatch(addUser(user));
        // dispatch(hideLoading());
      // }
    } catch (error) {
      // dispatch(hideLoading());
      console.log(error);
    }
    // Here you can write the code to save the changes to the backend
    setIsEditing(false);
  };

  return (
    <>
      <div className="mt-2 ">
        <div className=" col-md-10 col-lg-12 mx-auto mb-4 mb-lg-0">
          <div className="card shadow-lg" style={{ direction: "ltr" }}>
            <form>
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
                      src={editUser?.profile_url}
                      alt="avatar"
                      className="img-fluid w-50"
                    />

                    <div className="h5 mt-3">
                      {isEditing ? (
                        <div className="d-flex w-75 mx-auto g-3">
                          <input
                            className="form-control form-control-user text-right"
                            type="text"
                            value={editUser?.firstname}
                            onChange={(e) =>
                              setEditUser({
                                ...editUser,
                                firstname: e.target.value,
                              })
                            }
                          />
                          <input
                            className="form-control form-control-user text-right"
                            type="text"
                            value={editUser.lastName}
                            onChange={(e) =>
                              setEditUser({
                                ...editUser,
                                lastName: e.target.value,
                              })
                            }
                          />
                        </div>
                      ) : (
                        <>
                          {editUser?.firstname} {editUser?.lastName}
                        </>
                      )}
                    </div>
                    <p className="h6 my-3">
                      حساب ذخیره : {user.wallet?.balance}
                    </p>
                    {isEditing ? (
                      <button
                        type="button"
                        className="btn btn-success mb-3"
                        onClick={handleSave}
                      >
                        <i className="fa fa-save"></i>
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="btn btn-secondary mb-3 "
                        onClick={() => setIsEditing(true)}
                      >
                        <i className="fa fa-edit"></i>
                      </button>
                    )}
                  </div>
                </div>
                <div className=" col-12 col-md-8 w-50 ">
                  <div className="order-0 card-body p-4 w-100">
                    <div className="pb-3 border-bottom">
                      <span> 5 </span>
                      <span className="text-gray-900">
                        : امتیاز شما (از 10)
                      </span>
                    </div>
                    <h6 className="py-3  text-gray-900"> : تخصص ها </h6>
                    <div className="row pt-1 " style={{ direction: "rtl" }}>
                      {editUser.specialties?.map((item, index) => (
                        <div className="col-4 mb-3" key={index}>
                          {isEditing ? (
                            <input
                              className="form-control form-control-user text-right"
                              type="text"
                              value={item.name}
                              onChange={(e) => handleItemChange(index, e)}
                            />
                          ) : (
                            <p className="text-muted border-left-warning p-2">
                              {item.name}
                            </p>
                          )}
                        </div>
                      ))}
                      {isEditing && (
                        <div className="d-flex">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter a new specialty"
                            value={newSpecialty}
                            onChange={(e) => setNewSpecialty(e.target.value)}
                          />
                          <button
                            type="button"
                            className="btn shadow-sm btn-circle mr-2"
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
                        {user?.id}
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
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
