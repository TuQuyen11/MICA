import React from 'react';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Section from 'components/Section';
import { Col, Container, Row } from 'react-bootstrap';

const ContactUsPage = () => {
    return (
        <>
            <Header />
            <img
                src="/banner/top-banner.webp"
                className="w-100 mb-5"
            />
            <Section
                scheme="white"
                paddingVertical=""
            >
                <Container>
                    <div className="page-title">Đăng ký & Liên hệ</div>
                    <div className="mt-4 page-content">
                        <Row>
                            <Col
                                xs={{
                                    span: 12,
                                    order: 2,
                                }}
                                lg={{
                                    span: 7,
                                    order: 1,
                                }}
                            >
                                <div className="sub-heading">
                                    Đăng ký tham gia cùng MICA
                                </div>
                                <iframe
                                    src="https://docs.google.com/forms/d/e/1FAIpQLSe6BS_9j2gAswIh0YUUPoETo5HrNdoadzOQX4sh-5dWxyvhGg/viewform?embedded=true"
                                    width="640"
                                    height="500"
                                    frameBorder="0"
                                    marginHeight="0"
                                    marginWidth="0"
                                >
                                    Loading…
                                </iframe>
                            </Col>
                            <Col
                                xs={{
                                    span: 12,
                                    order: 1,
                                }}
                                lg={{
                                    span: 5,
                                    order: 2,
                                }}
                            >
                                <div className="sub-heading">
                                    Thông tin liên hệ
                                </div>
                                <ul>
                                    <li>
                                        <b>Địa chỉ:</b> Hội Y Học TP. Cần Thơ.
                                    </li>
                                    <li>
                                        <b>Email:</b>{' '}
                                        <a
                                            className="link-light"
                                            href="mailto:micaheart2024@gmail.com"
                                        >
                                            micaheart2024@gmail.com
                                        </a>
                                    </li>
                                    <li>
                                        <b>Hotline:</b>{' '}
                                        <a
                                            className="link-light"
                                            href="tel:+0907240116"
                                        >
                                            0907 240 116 (BS. Nguyễn Duy Khương
                                            – Tổng Thư ký Hội MICA)
                                        </a>
                                    </li>
                                    <li>
                                        <b>Website:</b>{' '}
                                        <a
                                            className="link-light"
                                            href="https://www.micaheart.org"
                                        >
                                            https://www.micaheart.org
                                        </a>
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    </div>
                    <hr className="mt-4 footer-divider" />
                </Container>
            </Section>
            <Footer />
        </>
    );
};

export default ContactUsPage;
