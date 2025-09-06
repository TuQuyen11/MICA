import React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Section from 'components/Section';
import { Accordion, Container } from 'react-bootstrap';

const categoriies = [
    'Can Thiệp Động Mạch Vành Phức Tạp Qua Da',
    'Can Thiệp Mạch Máu Qua Da',
    'Can Thiệp Sang Thương Phân Nhánh',
    'Sang Thương Tắc Hoàn Toàn Mạn Tính',
    'Bệnh Van & Cấu Trúc Tim',
    'Đào tạo',
    'Đổi Mới & Y Tế Số',
];

const KnowledgeHubPage = () => {
    return (
        <>
            <Header />
            <Section
                scheme="white"
                paddingVertical="pt-5"
            >
                <Container>
                    <div className="page-title">Thư viện kiến thức</div>
                    <div className="mt-4 page-content">
                        <Accordion className="custom-accordion">
                            {categoriies.map((category, index) => (
                                <Accordion.Item
                                    key={index}
                                    eventKey={index}
                                >
                                    <Accordion.Header>
                                        {category}
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <div className="text-center">
                                            <i>
                                                Thông tin đang được cập nhật...
                                            </i>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                            ))}
                        </Accordion>
                    </div>
                    <hr className="footer-divider" />
                </Container>
            </Section>
            <Footer />
        </>
    );
};

export default KnowledgeHubPage;
