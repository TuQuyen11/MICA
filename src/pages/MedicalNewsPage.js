import React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Section from 'components/Section';
import { Container } from 'react-bootstrap';
import NewsTile from 'components/NewsTile';

const MedicalNewsPage = () => {
    const renderNews = () => {
        return (
            <>
                <NewsTile
                    id={4}
                    landscape
                />
                <NewsTile
                    id={1}
                    landscape
                />
                <NewsTile
                    id={2}
                    landscape
                />
                <NewsTile
                    id={3}
                    landscape
                />
            </>
        );
    };

    return (
        <>
            <Header />
            <Section
                scheme="white"
                paddingVertical="pt-5"
            >
                <Container>
                    <div className="page-title">Cập nhật Y khoa</div>
                    <div className="mt-4">{renderNews()}</div>
                    <hr className="mt-5 footer-divider" />
                </Container>
            </Section>
            <Footer />
        </>
    );
};

export default MedicalNewsPage;
