import React, { useState } from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const user=useSelector(state=>state.user)
  const [isEditing, setIsEditing] = useState(false);
  const [editUser, setEditUser] = useState(user);
  const [newSpecialty, setNewSpecialty] = useState("");
  const [isAdding, setIsAdding] = useState(false);

  const handleAddItem = () => {
    if (newSpecialty.trim() === "") {
      alert("Please enter a specialty name.");
      return;
    }

    const newItem = { id: editUser.specialties.length + 1, name: newSpecialty };
    setEditUser({ ...editUser, specialties: [...editUser.specialties, newItem] });
    setNewSpecialty("");
    setIsAdding(false);
  };

  const handleItemChange = (id, e) => {
    const newItems = editUser.specialties.map((item,index) => {
    if (index === id) {
    return { ...item, name: e.target.value };
    }
    return item;
    });
    setEditUser({ ...editUser, specialties: newItems });
    console.log("change",id);
    console.log("change",e.target.value);

    if (e.target.value.trim() === "" || e.target.value.length===0) {
      handleItemDelete(id);
    }
      };
  const handleItemDelete = (id) => {
    const newItems = editUser.specialties.filter((_,index) => index !== id);
    console.log("delete",id);
    setEditUser({ ...editUser, specialties: newItems });
    };
    console.log(editUser);

  const handleSave = () => {
    // Here you can write the code to save the changes to the backend
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditUser(user);
    setIsEditing(false);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4 mb-4">
          <div className="card shadow mb-4">
            <div className="card-body">
              <div className="text-center">
                <img
                  className="img-fluid rounded-circle mb-2"
                  // src={user.avatar}
                  alt="Avatar"
                />
              </div>
              <h5 className="text-center">{user.firstname} {user.lastName}</h5>
            </div>
          </div>
        </div>
        <div className="col-lg-8 mb-4">
          <div className="card shadow mb-4">
            <div className="card-body">
              <h5 className="mb-4">Profile Information</h5>
              <form>
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">First Name:</label>
                  <div className="col-sm-9">
                    {isEditing ? (
                      <input
                        type="text"
                        className="form-control"
                        value={editUser?.firstname}
                        onChange={(e) =>
                          setEditUser({ ...editUser, firstname: e.target.value })
                        }
                      />
                    ) : (
                      <span>{editUser.firstname}</span>
                    )}
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">Last Name:</label>
                  <div className="col-sm-9">
                    {isEditing ? (
                      <input
                        type="text"
                        className="form-control"
                        value={editUser.lastName}
                        onChange={(e) =>
                          setEditUser({ ...editUser, lastName: e.target.value })
                        }
                      />
                    ) : (
                      <span>{editUser.lastName}</span>
                    )}
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">Wallet Balance:</label>
                  <div className="col-sm-9">
                    <span>{editUser.walletBalance} USD</span>
                  </div>
                </div>
                <hr />
                <h5 className="mb-4">Specialties</h5>
                <ul className="list-group mb-4">
                  {editUser.specialties.map((item,index) => (
                    <li key={index} className="list-group-item">
                      {isEditing ? (
                        <input
                          type="text"
                          className="form-control"
                          value={item.name}
                          onChange={(e) => handleItemChange(index, e)}
                        />
                      ) : (
                        <span>{item.name}</span>
                      )}
                    </li>
                  ))}
                  {isAdding && (
                    <li className="list-group-item">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter a new specialty"
                        value={newSpecialty}
                        onChange={(e) => setNewSpecialty(e.target.value)}
                      />
                      <button
                        type="button"
                        className="btn btn-primary mt-2"
                        onClick={handleAddItem}
                      >
                        Add
                      </button>
                    </li>
                  )}
                </ul>
                {isEditing ? (
                  <div className="text-center">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={handleSave}
                    >
                      Save Changes
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary ml-2"
                      onClick={handleCancel}
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <div className="text-center">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => setIsAdding(true)}
                    >
                      Add Specialty
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary ml-2"
                      onClick={() => setIsEditing(true)}
                    >
                      Edit Profile
                    </button>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;