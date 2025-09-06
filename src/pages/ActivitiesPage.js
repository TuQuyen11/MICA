import React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Section from 'components/Section';
import { Container } from 'react-bootstrap';

const ActivitiesPage = () => {
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
                    <div className="page-title">
                        Chăm Sóc Sức Khỏe Cộng Đồng
                    </div>
                    <div className="mt-4 page-content">
                        <div>
                            Chúng tôi cam kết mang lại dịch vụ y tế chất lượng
                            cao cho cộng đồng:
                            <ul>
                                <li>
                                    <b>Khám bệnh miễn phí & tư vấn sức khỏe</b>{' '}
                                    tại các khu vực khó khăn.
                                </li>
                                <li>
                                    <b>Hỗ trợ chi phí điều trị tim mạch</b> cho
                                    bệnh nhân có hoàn cảnh khó khăn.
                                </li>
                                <li>
                                    <b>Nâng cao nhận thức về bệnh tim mạch</b>{' '}
                                    qua hội thảo & truyền thông.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr className="mt-4 footer-divider" />
                </Container>
            </Section>
            <Footer />
        </>
    );
};

export default ActivitiesPage;
