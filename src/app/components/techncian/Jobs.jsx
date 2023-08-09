import React from "react";
import job from "/img/undraw_helpful_sign_re_8ms5.svg";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllJobs } from "../../redux/actions/jobs";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { reservationService } from "../../services/jobsService";
import { successMessage } from "../../../utils/message";
import "./jobsModal.css";
import Pagination from "../common/Pagination";

function Jobs() {
  const [selectedJob, setSelectedJob] = useState(null);
  const jobs = useSelector((state) => state.jobs);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    dispatch(getAllJobs(1));
  }, [dispatch]);

  const handleJobClick = (job) => {
    setSelectedJob(job);
  };

  const handleCloseModal = () => {
    setSelectedJob(null);
  };
  const handleReservation = async (id) => {
    const { status } = await reservationService(id);
    if (status === 200) {
      successMessage("رزرو انجام شد");
      setSelectedJob(null);
      dispatch(getAllJobs(1));
    }
  };
  const onPageChange = async (page, currentPage) => {
    if (currentPage !== page) {
      try {
        setLoading(true);
        dispatch(getAllJobs(page));
        // در اینجا منتظر بمانید تا درخواست جدید تکمیل شود
        setLoading(false);
      } catch (error) {
        // اگر خطا رخ دهد، می‌توانید اقدامات لازم را انجام دهید
        setLoading(false);
        console.error(error);
      }
    }
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
                        وضعیت
                      </th>
                      <th
                        className="p-3 bg-white text-gray-900"
                        tabIndex="0"
                        aria-controls="dataTable"
                        rowSpan="1"
                        colSpan="1"
                        aria-label="Age: activate to sort column ascending"
                      >
                        رزرو کار
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {loading && (
                        <>
                          <tr>
                            <td></td>
                          </tr>
                          <tr>
                            <td></td>
                            <td>
                              <span
                                className="spinner-border text-center text-dark mx-auto"
                                role="status"
                              ></span>
                            </td>
                          </tr>
                        </>
                      )}
                    
                    {(jobs?.jobs?.length === 0 ||
                      typeof jobs?.jobs?.length === "undefined") &&
                        <>
                          <tr>
                            <td></td>
                          </tr>
                          <tr>
                            <td></td>
                            <td>
                              <span
                                className="spinner-border text-center text-dark mx-auto"
                                role="status"
                              ></span>
                            </td>
                          </tr>
                        </>
                      }
                    {jobs?.jobs?.length > 0 &&
                      jobs?.jobs?.length !== undefined &&
                      jobs?.jobs.map((job) => (
                        <tr className="border-white" key={job.id}>
                          <td>{job.name_Device}</td>
                          <td>
                            {job.reservationStatusResult ===
                              "WatingforReserve" && (
                              <button className="btn btn-success btn-icon-split">
                                <span className="text d-md-block d-none">
                                  رزرو نشده
                                </span>
                                <span className="icon text-white-50">
                                  <i className="fas fa-check"></i>
                                </span>
                              </button>
                            )}
                            {job.reservationStatusResult ===
                              "ReservedByTec" && (
                              <button
                                className="btn shadow btn-icon-split"
                                disabled
                              >
                                <span className="text text-gray-900 d-md-block d-none">
                                  در حال تایید
                                </span>
                              </button>
                            )}

                            {job.reservationStatusResult ===
                              "ConfirmeByAdmin" && (
                              <button className="btn btn-danger btn-icon-split">
                                <span className="text d-md-block d-none">
                                  رزرو شده
                                </span>
                                <span className="icon text-white-50">
                                  <i className="fas fa-times"></i>
                                </span>
                              </button>
                            )}
                          </td>
                          <td className="">
                            {job.reservationStatusResult ===
                            "ConfirmeByAdmin" ? (
                              <p className="shadow btn">رزرو شده</p>
                            ) : (
                              <button
                                onClick={() => handleJobClick(job)}
                                className="btn btn-info"
                              >
                                اطلاعات بیشتر
                              </button>
                            )}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
                {selectedJob && (
                  <Modal
                    style={{ marginTop: "3rem", padding: "0" }}
                    contentClassName="modal-content"
                    show={true}
                    onHide={handleCloseModal}
                  >
                    <Modal.Header className="header" closeButton>
                      <Modal.Title>{selectedJob?.name_Device}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="py-5 px-4">
                      <p>مشکل: {selectedJob?.problems}</p>
                      <p className="my-3">
                        مشتری : {selectedJob?.customer?.fullNameCustomer}
                      </p>
                      <p>آدرس: {selectedJob?.customer?.address}</p>
                      <p className="my-3">
                        شماره تلفن: {selectedJob?.customer?.phone}
                      </p>
                      <p>توضیحات: {selectedJob?.description}</p>
                    </Modal.Body>
                    <Modal.Footer>
                      <button
                        className="btn shadow-sm btn-info text-light px-5 py-2 mx-auto "
                        style={{
                          border: "1px solid #f9e090 ",
                          color: " #000",
                          fontWeight: "500",
                        }}
                        onClick={() => handleReservation(selectedJob?.id)}
                      >
                        گرفتن کار
                      </button>
                    </Modal.Footer>
                    {/* </div> */}
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
          <Pagination
            totalItems={jobs?.pagination?.totalPages}
            pageSize={10}
            onPageChange={onPageChange}
          />
        </div>
      </section>
    </>
  );
}

export default Jobs;
