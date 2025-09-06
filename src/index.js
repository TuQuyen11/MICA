import HomePage from 'pages/HomePage';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import './global.css';
import ContactUsPage from 'pages/ContactUs';
import AboutUsPage from 'pages/AboutUsPage';
import UpcomingEventsPage from 'pages/UpcomingEventsPage';
import PartnersAndCollaborationsPage from 'pages/PartnersAndCollaborationsPage';
import EventsArchivePage from 'pages/EventsArchivePage';
import MedicalNewsPage from 'pages/MedicalNewsPage';
import PostPage from 'pages/PostPage';
import EventPage from 'pages/EventPage';
import MainActivitiesPage from 'pages/MainActivitiesPage';
import KnowledgeHubPage from 'pages/KnowledgeHubPage';

const routes = [
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: '/contact-us',
        element: <ContactUsPage />,
    },
    {
        path: '/about-us',
        element: <AboutUsPage />,
    },
    {
        path: '/main-activities',
        element: <MainActivitiesPage />,
    },
    {
        path: '/upcoming-events',
        element: <UpcomingEventsPage />,
    },
    {
        path: '/partners-and-collaborations',
        element: <PartnersAndCollaborationsPage />,
    },
    {
        path: '/events-archive',
        element: <EventsArchivePage />,
    },
    {
        path: '/medical-news',
        element: <MedicalNewsPage />,
    },
    {
        path: '/knowledge-hub',
        element: <KnowledgeHubPage />,
    },
    {
        path: '/post/:id',
        element: <PostPage />,
    },
    {
        path: '/event/:id',
        element: <EventPage />,
    },
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                {routes.map(({ path, element }) => (
                    <Route
                        key={path}
                        path={path}
                        element={element}
                    />
                ))}
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
);
