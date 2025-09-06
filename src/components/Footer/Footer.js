import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './style.css';
import SocialMediaLinks from 'components/SocialMediaLinks';

const Footer = () => {
    return (
        <footer className="pt-5 pb-4">
            <Container>
                <Row>
                    <Col
                        xs={12}
                        lg={6}
                    >
                        <Row>
                            <Col xs={12}>
                                <img
                                    src="/logo.webp"
                                    alt="logo"
                                    className="footer-logo mb-4"
                                />
                            </Col>
                            <Col xs={12}>
                                <div className="highlight-text">
                                    CHI HỘI TIM MẠCH CAN THIÊP MEKONG (MICA)
                                    <br />
                                    Mastery - Innovation - Collaboration -
                                    Accountability
                                    <br />
                                    Tinh Thông - Sáng Tạo - Hợp Tác - Trách
                                    nhiệm
                                </div>
                                <div className="my-2 mb-4 small-highlight-text">
                                    Tiên phong trong nghiên cứu, đào tạo và ứng
                                    dụng công nghệ tim mạch can thiệp, vì một
                                    trái tim khỏe mạnh.
                                </div>
                            </Col>
                        </Row>
                        <SocialMediaLinks />
                    </Col>
                    <Col
                        xs={12}
                        lg={6}
                    >
                        <Row className="mt-md-3 mt-lg-0">
                            <Col
                                xs={12}
                                md={4}
                                lg={6}
                                xl={4}
                            >
                                <ul className="list-unstyled mb-0 mt-4 mt-md-0">
                                    <li>
                                        <a
                                            className="footer-link d-block pb-4"
                                            href="#"
                                        >
                                            <img
                                                src="/icon/right-angle.webp"
                                                className="prefix-icon"
                                            />{' '}
                                            Trang chủ
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="footer-link d-block pb-4"
                                            href="/about-us"
                                        >
                                            <img
                                                src="/icon/right-angle.webp"
                                                className="prefix-icon"
                                            />{' '}
                                            Về MICA
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="footer-link d-block pb-4"
                                            href="/main-activities"
                                        >
                                            <img
                                                src="/icon/right-angle.webp"
                                                className="prefix-icon"
                                            />{' '}
                                            Hoạt động chính
                                        </a>
                                    </li>
                                    <li className="d-none d-lg-block d-xl-none">
                                        <a
                                            className="footer-link d-block pb-4"
                                            href="/partners-and-collaborations"
                                        >
                                            <img
                                                src="/icon/right-angle.webp"
                                                className="prefix-icon"
                                            />{' '}
                                            Đối tác & Hợp tác
                                        </a>
                                    </li>
                                    {/* <li>
                                        <a
                                            className="footer-link d-block pb-4"
                                            href="/knowledge-hub"
                                        >
                                            <img src="/icon/right-angle.webp" className='prefix-icon' />{' '}
                                            Thư viện kiến thức
                                        </a>
                                    </li> */}
                                </ul>
                            </Col>
                            <Col
                                xs={12}
                                md={4}
                                lg={6}
                                xl={4}
                            >
                                <ul className="list-unstyled mb-0 mt-4 mt-md-0">
                                    <li>
                                        <a
                                            className="footer-link d-block pb-4"
                                            href="/upcoming-events"
                                        >
                                            <img
                                                src="/icon/right-angle.webp"
                                                className="prefix-icon"
                                            />{' '}
                                            Sự kiện sắp tới
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="footer-link d-block pb-4"
                                            href="/events-archive"
                                        >
                                            <img
                                                src="/icon/right-angle.webp"
                                                className="prefix-icon"
                                            />{' '}
                                            Sự kiện đã diễn ra
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="footer-link d-block pb-4"
                                            href="/medical-news"
                                        >
                                            <img
                                                src="/icon/right-angle.webp"
                                                className="prefix-icon"
                                            />{' '}
                                            Tin tức
                                        </a>
                                    </li>
                                    <li className="d-none d-lg-block d-xl-none">
                                        <a
                                            className="footer-link d-block pb-4"
                                            href="/contact-us"
                                        >
                                            <img
                                                src="/icon/right-angle.webp"
                                                className="prefix-icon"
                                            />{' '}
                                            Đăng ký & Liên hệ
                                        </a>
                                    </li>
                                </ul>
                            </Col>
                            <Col
                                xs={12}
                                md={4}
                                xl={4}
                                className="d-lg-none d-xl-block"
                            >
                                <ul className="list-unstyled mb-0 mt-4 mt-md-0">
                                    <li>
                                        <a
                                            className="footer-link d-block pb-4"
                                            href="/partners-and-collaborations"
                                        >
                                            <img
                                                src="/icon/right-angle.webp"
                                                className="prefix-icon"
                                            />{' '}
                                            Đối tác & Hợp tác
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="footer-link d-block pb-4"
                                            href="/contact-us"
                                        >
                                            <img
                                                src="/icon/right-angle.webp"
                                                className="prefix-icon"
                                            />{' '}
                                            Đăng ký & Liên hệ
                                        </a>
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <hr className="my-4" />
            <Container>
                <Row>
                    <Col
                        xs={{
                            span: 12,
                            order: 1,
                        }}
                        lg={{
                            span: 4,
                            order: 2,
                        }}
                        className="d-flex justify-content-center justify-content-lg-end"
                    >
                        <a
                            href="#"
                            className="footer-link"
                        >
                            Website Policy <i className="fa-solid fa-link"></i>
                        </a>
                    </Col>
                    <Col
                        xs={{
                            span: 12,
                            order: 2,
                        }}
                        lg={{
                            span: 8,
                            order: 1,
                        }}
                        className="d-flex justify-content-center justify-content-lg-start"
                    >
                        &copy; 2025 Mekong Interventional Cardiology
                        Association. All rights reserved.
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
