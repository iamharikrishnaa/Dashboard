import React from 'react';
import Link from 'next/link';

const Footer = () => {
    const currentYear = new Date().getFullYear();
 
    return (
        <footer className="footer-area">
            <hr />
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-footer-widget">
                            <Link href="/">
                                <a className="logo">
                                    <img src="/images/l2.png" width={200} alt="logo" />
                                </a>
                            </Link>

                            <p>A transformative gift is creating a new home for the autism center and sparking a broader vision for behavioral health.</p>

                            <ul className="social-link">
                                <li>
                                    <a href="#" className="d-block" target="_blank">
                                        <i className='bx bxl-facebook'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="d-block" target="_blank">
                                        <i className='bx bxl-twitter'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="d-block" target="_blank">
                                        <i className='bx bxl-instagram'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="d-block" target="_blank">
                                        <i className='bx bxl-linkedin'></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-6 col-sm-6">
                        <div className="single-footer-widget pl-5">
                            <h3>Useful Links</h3>
                            <ul className="footer-links-list">
                                <li>
                                    <Link href="/">
                                        <a>Home</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/programs/">
                                        <a>Programs</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/teacher-trainings/">
                                        <a>Teacher Trainings</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blogs/">
                                        <a>Blogs</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact/">
                                        <a>Contact Us</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="single-footer-widget">
                            <h3>Himayat Nagar</h3>
                            <ul className="footer-contact-info">
                                <li>
                                    <i className='bx bx-map'></i> 
                                    3-6-547/5/2, New GHMC, 444, Street Number 7, Himayatnagar, Hyderabad, Telangana 500029
                                </li>
                                <li>
                                    <i className='bx bx-phone-call'></i> 
                                    <a href="tel:+919246505432">(+91) - 9246505432</a>
                                </li>
                                <li>
                                    <i className='bx bx-envelope'></i> 
                                    <a href="mailto:smilestherapycenter@gmail.com">smilestherapycenter@gmail.com</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="single-footer-widget">
                            <h3>Banjara  Hills</h3>
                            <ul className="footer-contact-info">
                                <li>
                                    <i className='bx bx-map'></i> 
                                    1st floor , no-14, 8-2-309/3, B/1 & 2, Nandi Nagar Rd, above Reliance smart point, Banjara Hills, Hyderabad, Telangana 500034
                                </li>
                                <li>
                                    <i className='bx bx-phone-call'></i> 
                                    <a href="tel:+919275292929">(+91) - 9275292929</a>
                                </li>
                                <li>
                                    <i className='bx bx-envelope'></i> 
                                    <a href="mailto:smilestherapycenter@gmail.com">smilestherapycenter@gmail.com</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom-area">
                    <div className="row align-items-center">
                        <div className="col-lg-12 col-md-6">
                            <p><i className='bx bx-copyright'></i>{currentYear} Proudly Powered by <a target="_blank" href="/">Smiles CDC</a></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="lines">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </footer>
    );
}

export default Footer;