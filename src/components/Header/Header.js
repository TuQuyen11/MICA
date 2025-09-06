import React, { useState } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import SocialMediaLinks from 'components/SocialMediaLinks'; // Updated import
import './style.css';

const Header = () => {
    const [expanded, setExpanded] = useState(false);

    const toggleMenu = () => {
        setExpanded(!expanded);
    };

    return (
        <Navbar
            bg="light"
            expand="xl"
            expanded={expanded}
            onToggle={toggleMenu}
            className="flex-column py-0"
            fixed="top"
        >
            {/* Navigation Bar */}
            <div className="w-100">
                <Container>
                    <div className="d-flex d-xl-none justify-content-between align-items-center py-2">
                        <Navbar.Brand href="/">
                            <img
                                src="/logo.webp"
                                alt="MICA Logo"
                                className="header-logo"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle
                            aria-controls="navbar-nav"
                            onClick={toggleMenu}
                        >
                            <span className="navbar-toggler-icon"></span>
                        </Navbar.Toggle>
                    </div>
                    <Navbar.Collapse id="navbar-nav d-xl-flex">
                        <Navbar.Brand
                            href="/"
                            className="d-none d-xl-block"
                        >
                            <img
                                src="/logo.webp"
                                alt="MICA Logo"
                                className="header-logo"
                            />
                        </Navbar.Brand>
                        <Nav className="d-xl-flex justify-content-xl-between w-100 navbar-background">
                            {/* Home */}
                            <Nav.Link href="/">Trang Chủ</Nav.Link>

                            {/* About Us */}
                            <Nav.Link href="/about-us">Về MICA</Nav.Link>

                            {/* Activities */}
                            <NavDropdown
                                title="Hoạt động"
                                id="activities-dropdown"
                                className="dropdown"
                            >
                                <NavDropdown.Item href="/main-activities">
                                    <img
                                        src="/icon/right-angle.webp"
                                        className="prefix-icon"
                                    />
                                    Hoạt Động Chính
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/knowledge-hub">
                                    <img
                                        src="/icon/right-angle.webp"
                                        className="prefix-icon"
                                    />
                                    Thư Viện Kiến Thức
                                </NavDropdown.Item>
                            </NavDropdown>

                            {/* Events & Conferences */}
                            <NavDropdown
                                title="Sự Kiện & Hội Thảo"
                                id="events-dropdown"
                                className="dropdown"
                            >
                                <NavDropdown.Item href="/upcoming-events">
                                    <img
                                        src="/icon/right-angle.webp"
                                        className="prefix-icon"
                                    />
                                    Sự Kiện Sắp Tới
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/events-archive">
                                    <img
                                        src="/icon/right-angle.webp"
                                        className="prefix-icon"
                                    />
                                    Sự Kiện Đã Diễn Ra
                                </NavDropdown.Item>
                            </NavDropdown>

                            {/* Knowledge Hub */}
                            <Nav.Link href="/medical-news">Tin Tức</Nav.Link>

                            {/* Partners & Collaborations */}
                            <Nav.Link href="/partners-and-collaborations">
                                Đối Tác & Hợp Tác
                            </Nav.Link>

                            {/* Contact Us */}
                            <Nav.Link href="/contact-us">
                                Đăng Ký & Liên Hệ
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </div>

            {/* Mobile Menu */}
            {expanded && (
                <div className="d-xl-none w-100 bg-white py-3">
                    <Container>
                        <SocialMediaLinks />
                    </Container>
                </div>
            )}
        </Navbar>
    );
};

export default Header;
