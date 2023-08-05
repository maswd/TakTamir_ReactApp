import React from "react";
import user from "/img/undraw_profile.svg";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
function AdminTopNav() {
  const user= useSelector(state=>state.user)
  return (
    <>
      <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
        <button
          id="sidebarToggleTop"
          className="btn btn-link d-md-none rounded-circle ml-3"
        >
          <i className="fa fa-bars"></i>
        </button>

        {/* <form className="d-none d-sm-inline-block form-inline mr-auto mr-md-3 my-2 my-md-0 mw-100 navbar-search">
          <div className="input-group">
            <input
              type="text"
              className="form-control bg-light border-0 small rounded-csutom"
              placeholder="Search for..."
              aria-label="Search"
              aria-describedby="basic-addon2"
            />
            <div className="input-group-append">
              <button
                className="btn btn-info  bg-gradient-info rounded-left"
                type="button"
              >
                <i className="fas fa-search fa-sm"></i>
              </button>
            </div>
          </div>
        </form> */}

        <ul className="navbar-nav pr-5 mr-auto">
          {/* <li className="nav-item dropdown no-arrow d-sm-none">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="searchDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fas fa-search fa-fw"></i>
            </a>

            <div
              className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
              aria-labelledby="searchDropdown"
            >
              <form className="form-inline mr-auto w-100 navbar-search">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control bg-light border-0 small"
                    placeholder="Search for..."
                    aria-label="Search"
                    aria-describedby="basic-addon2"
                  />
                  <div className="input-group-append">
                    <button className="btn btn-primary" type="button">
                      <i className="fas fa-search fa-sm"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </li> */}

          <li className="nav-item dropdown no-arrow mx-1">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="alertsDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fas fa-bell fa-fw"></i>

              <span className="badge badge-danger badge-counter">3+</span>
            </a>

            <div
              className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
              aria-labelledby="alertsDropdown"
            >
              <h6 className="dropdown-header">مرکز هشدارها</h6>
              <a className="dropdown-item d-flex align-items-center" href="#">
                <div className="ml-3">
                  <div className="icon-circle bg-primary">
                    <i className="fas fa-file-alt text-white"></i>
                  </div>
                </div>
                <div>
                  <div className="small text-gray-500">12 دسامبر 2019</div>
                  <span className="font-weight-bold">
                    یک گزارش ماهانه جدید برای دانلود آماده شده است!
                  </span>
                </div>
              </a>
              <a className="dropdown-item d-flex align-items-center" href="#">
                <div className="ml-3">
                  <div className="icon-circle bg-success">
                    <i className="fas fa-donate text-white"></i>
                  </div>
                </div>
                <div>
                  <div className="small text-gray-500">7 دسامبر 2019</div>
                  290.29 دلار به حساب شما واریز شده است!
                </div>
              </a>
              <a className="dropdown-item d-flex align-items-center" href="#">
                <div className="ml-3">
                  <div className="icon-circle bg-warning">
                    <i className="fas fa-exclamation-triangle text-white"></i>
                  </div>
                </div>
                <div>
                  <div className="small text-gray-500">2 دسامبر 2019</div>
                  هشدار هزینه: ما خرج بالایی در حساب شما مشاهده کرده‌ایم.
                </div>
              </a>
              <a
                className="dropdown-item text-center small text-gray-500"
                href="#"
              >
                نمایش همه هشدارها
              </a>
            </div>
          </li>

          <li className="nav-item dropdown no-arrow mx-1">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="messagesDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fas fa-envelope fa-fw"></i>

              <span className="badge badge-danger badge-counter">7</span>
            </a>

            <div
              className="dropdown-list dropdown-menu dropdown-menu-left shadow animated--grow-in"
              aria-labelledby="messagesDropdown"
            >
              <h6 className="dropdown-header">مرکز پیام‌ها</h6>
              <a className="dropdown-item d-flex align-items-center" href="#">
                <div className="dropdown-list-image ml-3">
                  <img
                    className="rounded-circle"
                    src="/img/undraw_profile.svg"
                    alt="..."
                  />
                  <div className="status-indicator bg-success"></div>
                </div>
                <div className="font-weight-bold">
                  <div className="text-truncate">
                    سلام! می‌خواستم بدونم می‌تونید به من با یه مشکل کمک کنید که
                    دارم؟
                  </div>
                  <div className="small text-gray-500">
                    امیلی فاولر · ۵۸ دقیقه پیش
                  </div>
                </div>
              </a>
              <a className="dropdown-item d-flex align-items-center" href="#">
                <div className="dropdown-list-image ml-3">
                  <img
                    className="rounded-circle"
                    src="/img/undraw_profile.svg"
                    alt="..."
                  />
                  <div className="status-indicator"></div>
                </div>
                <div>
                  <div className="text-truncate">
                    عکس‌هایی که ماه قبل سفارش دادید رو دارم، چطوری می‌خواید
                    براتون بفرستم؟
                  </div>
                  <div className="small text-gray-500">جی چان · ۱ روز پیش</div>
                </div>
              </a>
              <a className="dropdown-item d-flex align-items-center" href="#">
                <div className="dropdown-list-image ml-3">
                  <img
                    className="rounded-circle"
                    src="/img/undraw_profile.svg"
                    alt="..."
                  />
                  <div className="status-indicator bg-warning"></div>
                </div>
                <div>
                  <div className="text-truncate">
                    گزارش ماه گذشته خیلی خوب بود، من تا به حال با پیشرفت راضی
                    هستم، همین کار رو ادامه بده!
                  </div>
                  <div className="small text-gray-500">
                    مورگان آلوارز · ۲ روز پیش
                  </div>
                </div>
              </a>
              <a className="dropdown-item d-flex align-items-center" href="#">
                <div className="dropdown-list-image ml-3">
                  <img
                    className="rounded-circle"
                    src="/img/undraw_profile.svg"
                    alt="..."
                  />
                  <div className="status-indicator bg-success"></div>
                </div>
                <div>
                  <div className="text-truncate">
                    آیا من یک سگ خوب هستم؟ دلیل پرسیدن این سوال این بود که کسی
                    به من گفت که این جمله رو به تمام سگ‌ها می‌گن، حتی اگر خوب
                    نباشن...
                  </div>
                  <div className="small text-gray-500">
                    چیکن سگ · ۲ هفته پیش
                  </div>
                </div>
              </a>
              <a
                className="dropdown-item text-center small text-gray-500"
                href="#"
              >
                خواندن پیام‌های بیشتر
              </a>
            </div>
          </li>

          <div className="topbar-divider d-none d-sm-block"></div>

          <li className="nav-item dropdown no-arrow">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="userDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span className="ml-2 d-flex text-gray-600 small">
                {user.firstname} {user.lastName}
              </span>
              <img className="img-profile rounded-circle" src={user.profile_url} />
            </a>

            <div
              className="dropdown-menu dropdown-menu-left shadow animated--grow-in"
              aria-labelledby="userDropdown"
            >
              <a className="dropdown-item" href="#">
                <i className="fas fa-user fa-sm fa-fw ml-2 text-gray-400"></i>
                پروفایل
              </a>
              <a className="dropdown-item" href="#">
                <i className="fas fa-cogs fa-sm fa-fw ml-2 text-gray-400"></i>
                تنظیمات
              </a>
              <a className="dropdown-item" href="#">
                <i className="fas fa-list fa-sm fa-fw ml-2 text-gray-400"></i>
                لاگ فعالیت
              </a>
              <div className="dropdown-divider"></div>
              <NavLink className="dropdown-item" to="/logout">
                <i className="fa fa-power-off fa-sm fa-fw ml-2 text-gray-400"></i>
                خروج
              </NavLink>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default AdminTopNav;
