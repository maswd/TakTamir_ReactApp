import React from "react";
import job from "/img/undraw_helpful_sign_re_8ms5.svg";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllJobs } from "../../redux/actions/jobs";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
function Jobs() {
  const [selectedJob, setSelectedJob] = useState(null);
  const jobs = useSelector((state) => state.jobs);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllJobs());
  }, [dispatch]);

  const handleJobClick = (job) => {
    setSelectedJob(job);
  };

  const handleCloseModal = () => {
    setSelectedJob(null);
  };

  return (
    <>
      <section className=" mt-2">
        <div className="container-fluid">
          <div
            style={{
              background:
                "linear-gradient(to right bottom, rgba(246, 211, 101, .1), rgba(253, 160, 133, .1))",
            }}
            className="row justify-content-center align-items-center align-items-lg-start textthree-row textthree-position-right"
          >
          
            <div className="col-md-12 col-lg-7 textthree-texts">
              <div className="">
                <img src="/img/dots-pattern.svg" />
                <p className="d-inline-block mr-4 h5"> کارتو اینجا پیدا کن</p>
              </div>
              <div
                className="textthree-texts__wrapper"
                style={{ width: "100%" }}
              >
                <table
                  className="table table-bordered dataTable"
                  cellSpacing="0"
                  aria-describedby="dataTable_info"
                  style={{
                    width: "100%",
                    direction: "rtl",
                    textAlign: "center",
                  }}
                >
                  <thead>
                    <tr role="row">
                      <th
                        className="p-3 bg-white  text-gray-900"
                        tabIndex="0"
                        aria-controls="dataTable"
                        rowSpan="1"
                        colSpan="1"
                        aria-label="Name: activate to sort column descending"
                        aria-sort="ascending"
                      >
                        عنوان کار
                      </th>
                      <th
                        className="p-3 bg-white text-gray-900"
                        tabIndex="0"
                        aria-controls="dataTable"
                        rowSpan="1"
                        colSpan="1"
                        aria-label="Position: activate to sort column ascending"
                      >
                        نام مشتری
                      </th>
                      <th
                        className="p-3 bg-white text-gray-900"
                        tabIndex="0"
                        aria-controls="dataTable"
                        rowSpan="1"
                        colSpan="1"
                        aria-label="Age: activate to sort column ascending"
                      >
                        وضعیت
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {jobs.map((job) => (
                      <tr className="border-white" key={job.id}>
                        <td>{job.name_Device}</td>
                        <td className="">{job.customer.fullNameCustomer}</td>
                        <td>
                          {job.statusJob !== "0" ? (
                            <button
                              className="btn btn-success btn-icon-split"
                              onClick={() => handleJobClick(job)}
                            >
                              <span className="text d-md-block d-none">
                                رزرو کردن
                              </span>
                              <span className="icon text-white-50">
                                <i className="fas fa-check"></i>
                              </span>
                            </button>
                          ) : (
                            <div className="btn btn-danger btn-icon-split">
                              <span className="text d-md-block d-none">
                                رزرو شده
                              </span>
                              <span className="icon text-white-50">
                                <i className="fas fa-times"></i>
                              </span>
                            </div>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {selectedJob && (
                  <Modal show={true} onHide={handleCloseModal}>
                    <Modal.Header closeButton>
                      <Modal.Title>{selectedJob.name_Device}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <p>مشکل: {selectedJob.problems}</p>
                      <p>مشتری : {selectedJob.customer.fullNameCustomer}</p>
                      <p>آدرس: {selectedJob.customer.address}</p>
                      <p>شماره تلفن: {selectedJob.customer.phone}</p>
                      <p>توضیحات: {selectedJob.description}</p>
                    </Modal.Body>
                    <Modal.Footer>
                      <button className="btn btn-success">گرفتن کار</button>
                      <button
                        className="btn btn-danger"
                        onClick={handleCloseModal}
                      >
                        بستن
                      </button>
                    </Modal.Footer>
                  </Modal>
                )}
              </div>
            </div>
            <div className="col-md-2 col-lg-4 textthree-img">
              <div
                className="textthree-img__wrapper"
                style={{ transform: "scale(1)" }}
              >
                <div className="textthree-img__bg">
                  <img src={job} />
                </div>
              </div>
            </div>
            <div
              style={{
                background:
                  "linear-gradient(to right bottom, rgba(246, 211, 101, 1), rgba(253, 160, 133, 1))",
              }}
              className="textthree-bgBox "
            ></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Jobs;
