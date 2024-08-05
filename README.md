# پروژه تک تعمیر

تک تعمیر یک سایت خدماتی برای درخواست تعمیرات می‌باشد که مشتریان می‌توانند درخواست‌های خود را ارسال کنند و تعمیرکاران پس از تایید هویت توسط مدیر، می‌توانند به درخواست‌ها پاسخ دهند و کار را انجام دهند. این پروژه با استفاده از تکنولوژی‌های مدرن و به زبان ریکت توسعه داده شده است و قابلیت چت با پشتیبانی را نیز دارد که با استفاده از  SignalR پیاده‌سازی شده است.

## ویژگی‌ها

- **ارسال درخواست تعمیرات:** کاربران می‌توانند به راحتی درخواست‌های تعمیرات خود را ثبت کنند.
- **تایید هویت تعمیرکاران:** تعمیرکاران تنها پس از تایید هویت توسط مدیر سایت می‌توانند به درخواست‌ها پاسخ دهند.
- **چت با پشتیبانی:** کاربران می‌توانند به صورت آنلاین با پشتیبانی سایت در ارتباط باشند و مشکلات خود را مطرح کنند.
- **واکنش‌گرا بودن:** طراحی سایت به صورت کاملاً واکنش‌گرا انجام شده است و در دستگاه‌های مختلف به خوبی نمایش داده می‌شود.

## تکنولوژی‌های استفاده شده

- **React + Vite** برای توسعه رابط کاربری سایت.
- **Socket.IO - SignalR** برای پیاده‌سازی سیستم چت.
- **Bootstrap** طراحی رابط کاربری


## دمو

### video from platform
[![Watch the video]](https://github.com/maswd/TakTamir_ReactApp/blob/master/public/img/%D8%AA%DA%A9%20%D9%86%D8%B9%D9%85%DB%8C%D8%B)


## Authors

* Mohamadreza Kiani
* Masoud Gorgani
برای مشاهده دمو، روی لینک زیر کلیک کنید:


ویدیو آپارات:

لینک: [مشاهده در آپارات](https://aparat.com/v/ywn5wl6)


دموی آنلاین : 
لینک [مشاهده](https://app.tak-tamir.ir)


## نصب و راه‌اندازی

برای اجرای این پروژه، مراحل زیر را دنبال کنید:

1. ابتدا مخزن را کلون کنید:
    ```bash
    git clone https://github.com/maswd/TakTamir_ReactApp.git
    ```

2. وارد پوشه پروژه شوید:
    ```bash
    cd TakTamir_ReactApp
    ```

3. وابستگی‌ها را نصب کنید:
    ```bash
    npm install
    ```

4. پروژه را اجرا کنید:
    ```bash
    npm run dev
    ```

## وابستگی‌های پروژه

```json
"dependencies": {
  "@microsoft/signalr": "^7.0.9",
  "aos": "^2.3.4",
  "axios": "^1.4.0",
  "bootstrap-switch-button-react": "^1.2.0",
  "formik": "^2.4.3",
  "jquery": "^3.7.0",
  "persian-date": "^1.1.0",
  "react": "^18.2.0",
  "react-auth-code-input": "^3.2.1",
  "react-bootstrap": "^2.8.0",
  "react-code-input": "^3.10.1",
  "react-content-loader": "^6.2.1",
  "react-dom": "^18.2.0",
  "react-hook-form": "^7.45.2",
  "react-redux": "^8.1.2",
  "react-redux-loading-bar": "^5.0.4",
  "react-router-dom": "^6.14.1",
  "react-slick": "^0.29.0",
  "react-toastify": "^9.1.3",
  "redux": "^4.2.1",
  "redux-devtools-extension": "^2.13.9",
  "redux-logger": "^3.0.6",
  "redux-persist": "^6.0.0",
  "redux-thunk": "^2.4.2",
  "simple-react-validator": "^1.6.2",
  "slick-carousel": "^1.8.1",
  "sweetalert2": "^11.7.20",
  "yup": "^1.2.0"
}

