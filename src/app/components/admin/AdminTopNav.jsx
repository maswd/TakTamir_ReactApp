import React from "react";
import profile from "/img/user.png";
import { NavLink,Link } from "react-router-dom";
import { useSelector } from "react-redux";
function AdminTopNav() {
  const user = useSelector((state) => state.user);
  return (
    <>
      <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top  shadow">
        <div className="container">
          <button
            id="sidebarToggleTop"
            className="btn btn-link d-md-none rounded-circle "
          >
            <i className="fa fa-bars"></i>
          </button>

          <ul className="navbar-nav pr-5 mr-auto">
            <li className="nav-item dropdown no-arrow mx-1">
              <Link
                className="nav-link dropdown-toggle"
                
                id="alertsDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fas fa-bell fa-fw"></i>

                <span className="badge badge-danger badge-counter">3+</span>
              </Link>

              <div
                className="dropdown-list dropdown-menu dropdown-menu-left shadow animated--grow-in"
                aria-labelledby="alertsDropdown"
              >
                <h6 className="dropdown-header">مرکز هشدارها</h6>
                <Link className="dropdown-item d-flex align-items-center" >
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
                </Link>
                <Link className="dropdown-item d-flex align-items-center" >
                  <div className="ml-3">
                    <div className="icon-circle bg-success">
                      <i className="fas fa-donate text-white"></i>
                    </div>
                  </div>
                  <div>
                    <div className="small text-gray-500">7 دسامبر 2019</div>
                    290.29 دلار به حساب شما واریز شده است!
                  </div>
                </Link>
                <Link className="dropdown-item d-flex align-items-center" >
                  <div className="ml-3">
                    <div className="icon-circle bg-warning">
                      <i className="fas fa-exclamation-triangle text-white"></i>
                    </div>
                  </div>
                  <div>
                    <div className="small text-gray-500">2 دسامبر 2019</div>
                    هشدار هزینه: ما خرج بالایی در حساب شما مشاهده کرده‌ایم.
                  </div>
                </Link>
                <Link
                  className="dropdown-item text-center small text-gray-500"
                  
                >
                  نمایش همه هشدارها
                </Link>
              </div>
            </li>

            <li className="nav-item dropdown no-arrow mx-1">
              <Link
                className="nav-link dropdown-toggle"
                
                id="messagesDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fas fa-envelope fa-fw"></i>

                <span className="badge badge-danger badge-counter">7</span>
              </Link>

              <div
                className="dropdown-list dropdown-menu dropdown-menu-left shadow animated--grow-in"
                aria-labelledby="messagesDropdown"
              >
                <h6 className="dropdown-header">مرکز پیام‌ها</h6>
                <Link className="dropdown-item d-flex align-items-center" >
                  <div className="dropdown-list-image ml-3">
                    <img
                      className="rounded-circle"
                      src={"/img/undraw_profile.svg"}
                      alt="..."
                    />
                    <div className="status-indicator bg-success"></div>
                  </div>
                  <div className="font-weight-bold">
                    <div className="text-truncate">
                      سلام! می‌خواستم بدونم می‌تونید به من با یه مشکل کمک کنید
                      که دارم؟
                    </div>
                    <div className="small text-gray-500">
                      امیلی فاولر · ۵۸ دقیقه پیش
                    </div>
                  </div>
                </Link>
                <Link className="dropdown-item d-flex align-items-center" >
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
                    <div className="small text-gray-500">
                      جی چان · ۱ روز پیش
                    </div>
                  </div>
                </Link>
                <Link className="dropdown-item d-flex align-items-center" >
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
                </Link>
                <Link className="dropdown-item d-flex align-items-center" >
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
                </Link>
                <Link
                  className="dropdown-item text-center small text-gray-500"
                  
                >
                  خواندن پیام‌های بیشتر
                </Link>
              </div>
            </li>

            <div className="topbar-divider d-none d-sm-block"></div>

            <li className="nav-item dropdown no-arrow">
              <Link
                className="nav-link dropdown-toggle"
                
                id="userDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="ml-2 d-flex text-gray-600 small">
                  {user.firstname} {user.lastName}
                </span>
                <img
                  className="img-profile rounded-circle border"
                  src={profile}
                />
              </Link>

              <div
                className="dropdown-menu dropdown-menu-left shadow animated--grow-in"
                aria-labelledby="userDropdown"
              >
                <Link className="dropdown-item" >
                  <i className="fas fa-user fa-sm fa-fw ml-2 text-gray-400"></i>
                  پروفایل
                </Link>
                <Link className="dropdown-item" >
                  <i className="fas fa-cogs fa-sm fa-fw ml-2 text-gray-400"></i>
                  تنظیمات
                </Link>
                <Link className="dropdown-item" >
                  <i className="fas fa-list fa-sm fa-fw ml-2 text-gray-400"></i>
                  لاگ فعالیت
                </Link>
                <div className="dropdown-divider"></div>
                <NavLink className="dropdown-item" to="/logout">
                  <i className="fa fa-power-off fa-sm fa-fw ml-2 text-gray-400"></i>
                  خروج
                </NavLink>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default AdminTopNav;
