import React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Section from 'components/Section';
import { Container } from 'react-bootstrap';
import EventTile from 'components/EventTile';
import { events } from '../constants/event';

const UpcomingEventsPage = () => {
    const filteredEvents = events.filter(
        ({ date }) => new Date(date) > new Date(),
    );

    return (
        <>
            <Header />
            <Section
                scheme="white"
                paddingVertical="mt-5"
            >
                <Container>
                    <div className="page-title">Sự kiện sắp tới</div>
                    <div className="mt-4 page-content">
                        {filteredEvents.map(
                            ({ date, description, id, location, title }) => (
                                <EventTile
                                    key={id}
                                    id={id}
                                    date={date}
                                    description={description}
                                    location={location}
                                    title={title}
                                />
                            ),
                        )}
                    </div>
                    <hr className="mt-5 footer-divider" />
                </Container>
            </Section>
            <Footer />
        </>
    );
};

export default UpcomingEventsPage;
