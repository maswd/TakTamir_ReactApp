import email2 from "/img/email2.svg"
import address2 from "/img/address2.svg"
import phone2 from "/img/phone2.svg"
import {Link} from 'react-router-dom'
function Footer() {
    return (
        <div data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="500" id="footer" >
            <section className="footertwo__section forPadding" >
                <div className="container">
                    <div className="row justify-content-md-center">
                        <div className="col-md-12">
                            <div className="tem2-footer">
                                <div className="row">
                                    <div className="col-md-5">
                                        <div className="tem2-info">
                                            <h5 className="tem2-topic" >چرا شرکت و خدمات ما ؟</h5>
                                            <div className="tem2-desc color-links" >
                                                <p style={{ direction: "rtl", textAlign: "right" }}>هزینه و زمان زیادی برای ساخت
                                                    لندینگ پیج ( صفحه فرود ) توسط تیم محصول صرف می کنید. و در آخر هم ممکن
                                                    است، صفحه فرود شما بدلیل استاندارد نبودن، نرخ تبدیل مناسبی نداشته و
                                                    مشتریان خود را از دست می‌دید. متناسب با نیاز کاربران صفحه فرود اختصاصی
                                                    بسازید. لندین این بستر رو برای شما فراهم کرده است.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-7">
                                        <div className="row">
                                            <div className="col-md-9">
                                                <div className="tem2-contact">
                                                    <div className="tem2-data">
                                                        <ul>
                                                            <li ><img src={address2} alt="" />
                                                                <p >تهران، خیابان انقلاب، نرسیده به چهارراه ولی عصر،
                                                                    کوچه بالاور، پلاک ۷، برج فناوری دانشگاه صنعتی امیرکبیر،
                                                                    طبقه دوم، فینووا</p>
                                                            </li>
                                                            <li ><img src={phone2} alt="" /><Link
                                                                href="tel:%DB%B0%DB%B2%DB%B1-%DB%B1%DB%B2%DB%B3%DB%B4%DB%B5%DB%B6%DB%B7%DB%B8"
                                                            >09159594376</Link></li>
                                                            <li ><img src={email2} alt="" /><Link
                                                                href="mailto:hi@landin.ir" className="tem2-email"
                                                            >taktamir.ir</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="tem2-social">
                                                    <div className="tem2-media"><Link href="https://www.aparat.com/#"
                                                        target="_blank" rel="noopener noreferrer"><span
                                                            className="icon-holder"><svg id="brand"
                                                                xmlns="http://www.w3.org/2000/svg" width="22.973"
                                                                height="22.982" viewBox="0 0 22.973 22.982">
                                                                <g id="icon--fourth">
                                                                    <path id="Path_823" data-name="Path 823"
                                                                        d="M15.677.675,13.562.123A3.557,3.557,0,0,0,9.208,2.648L8.68,4.642a10.894,10.894,0,0,1,7-3.967Z"
                                                                        transform="translate(-5.763 -0.003)"
                                                                        fill="#212936"></path>
                                                                    <path id="Path_824" data-name="Path 824"
                                                                        d="M.641,39.33.123,41.283a3.557,3.557,0,0,0,2.525,4.351l2.017.538A10.9,10.9,0,0,1,.641,39.33Z"
                                                                        transform="translate(-0.003 -26.107)"
                                                                        fill="#212936"></path>
                                                                    <path id="Path_825" data-name="Path 825"
                                                                        d="M55.993,9.062l-2.263-.6a10.894,10.894,0,0,1,4.169,7.3l.622-2.354a3.557,3.557,0,0,0-2.528-4.341Z"
                                                                        transform="translate(-35.666 -5.617)"
                                                                        fill="#212936"></path>
                                                                    <path id="Path_826" data-name="Path 826"
                                                                        d="M38.69,57.89l2.169.585a3.557,3.557,0,0,0,4.351-2.525l.612-2.3a10.9,10.9,0,0,1-7.131,4.24Z"
                                                                        transform="translate(-25.682 -35.613)"
                                                                        fill="#212936"></path>
                                                                    <path id="Path_827" data-name="Path 827"
                                                                        d="M14.5,4.54A9.962,9.962,0,1,0,24.455,14.5,9.962,9.962,0,0,0,14.5,4.54ZM8.854,9.509a2.844,2.844,0,1,1,2.256,3.332A2.844,2.844,0,0,1,8.854,9.509Zm4.139,8.607a2.844,2.844,0,1,1-.435-2.135A2.844,2.844,0,0,1,12.993,18.117Zm1.207-2.3a1.264,1.264,0,1,1,.951-.2,1.264,1.264,0,0,1-.951.2Zm5.934,3.675a2.844,2.844,0,1,1-2.256-3.332A2.844,2.844,0,0,1,20.134,19.489Zm-1.883-5.272a2.839,2.839,0,1,1,2.134-.436,2.844,2.844,0,0,1-2.134.436Z"
                                                                        transform="translate(-3.008 -3.015)"
                                                                        fill="#212936"></path>
                                                                </g>
                                                            </svg></span></Link><Link href="https://www.instagram.com/#"
                                                                target="_blank" rel="noopener noreferrer"><span
                                                                    className="icon-holder"><svg id="instagram"
                                                                        xmlns="http://www.w3.org/2000/svg" width="22.694"
                                                                        height="22.694" viewBox="0 0 22.694 22.694">
                                                                    <g id="Group_40" data-name="Group 40">
                                                                        <g id="Group_39" data-name="Group 39">
                                                                            <path id="Path_79" data-name="Path 79"
                                                                                d="M15.6,0H7.092A7.093,7.093,0,0,0,0,7.092V15.6a7.093,7.093,0,0,0,7.092,7.092H15.6A7.093,7.093,0,0,0,22.694,15.6V7.092A7.093,7.093,0,0,0,15.6,0Zm4.964,15.6A4.97,4.97,0,0,1,15.6,20.566H7.092A4.97,4.97,0,0,1,2.128,15.6V7.092A4.97,4.97,0,0,1,7.092,2.128H15.6a4.97,4.97,0,0,1,4.964,4.964Z"
                                                                                fill="#212936"></path>
                                                                        </g>
                                                                    </g>
                                                                    <g id="Group_42" data-name="Group 42"
                                                                        transform="translate(5.674 5.674)">
                                                                        <g id="Group_41" data-name="Group 41">
                                                                            <path id="Path_80" data-name="Path 80"
                                                                                d="M133.673,128a5.674,5.674,0,1,0,5.674,5.674A5.674,5.674,0,0,0,133.673,128Zm0,9.219a3.546,3.546,0,1,1,3.546-3.546A3.551,3.551,0,0,1,133.673,137.219Z"
                                                                                transform="translate(-128 -128)"
                                                                                fill="#212936"></path>
                                                                        </g>
                                                                    </g>
                                                                    <g id="Group_44" data-name="Group 44"
                                                                        transform="translate(16.69 4.492)">
                                                                        <g id="Group_43" data-name="Group 43">
                                                                            <circle id="Ellipse_16" data-name="Ellipse 16"
                                                                                cx="0.756" cy="0.756" r="0.756"
                                                                                fill="#212936"></circle>
                                                                        </g>
                                                                    </g>
                                                                </svg></span></Link><Link href="https://www.twitter.com/#"
                                                                    target="_blank" rel="noopener noreferrer"><span
                                                                        className="icon-holder"><svg xmlns="http://www.w3.org/2000/svg"
                                                                            width="23.445" height="19.049"
                                                                            viewBox="0 0 23.445 19.049">
                                                                    <g id="brands-and-logotypes"
                                                                        transform="translate(0 -48)">
                                                                        <g id="Group_383" data-name="Group 383"
                                                                            transform="translate(0 48)">
                                                                            <path id="Path_828" data-name="Path 828"
                                                                                d="M23.445,50.255a10.021,10.021,0,0,1-2.769.759,4.78,4.78,0,0,0,2.114-2.657,9.606,9.606,0,0,1-3.048,1.163,4.806,4.806,0,0,0-8.314,3.287,4.949,4.949,0,0,0,.111,1.1,13.6,13.6,0,0,1-9.907-5.028A4.808,4.808,0,0,0,3.109,55.3a4.747,4.747,0,0,1-2.172-.592v.053a4.829,4.829,0,0,0,3.851,4.723,4.8,4.8,0,0,1-1.26.158,4.25,4.25,0,0,1-.91-.082A4.852,4.852,0,0,0,7.11,62.908a9.658,9.658,0,0,1-5.96,2.05A9,9,0,0,1,0,64.892a13.532,13.532,0,0,0,7.374,2.157,13.586,13.586,0,0,0,13.68-13.677c0-.212-.007-.418-.018-.621A9.589,9.589,0,0,0,23.445,50.255Z"
                                                                                transform="translate(0 -48)" fill="#212936">
                                                                            </path>
                                                                        </g>
                                                                    </g>
                                                                </svg></span></Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="tem2-tag">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer