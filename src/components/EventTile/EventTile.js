/* eslint-disable react/prop-types */
import React from 'react';
import { Col, Row } from 'react-bootstrap';

const monthNames = [
    'Tháng 1',
    'Tháng 2',
    'Tháng 3',
    'Tháng 4',
    'Tháng 5',
    'Tháng 6',
    'Tháng 7',
    'Tháng 8',
    'Tháng 9',
    'Tháng 10',
    'Tháng 11',
    'Tháng 12',
];

const EventTile = ({ date, id, location, title }) => {
    const dateObj = new Date(date);

    return (
        <>
            <div className="sub-heading sub-heading-event-title mt-4 pb-0">
                <a
                    href={`/event/${id}`}
                    className="link"
                >
                    {title}
                </a>
            </div>
            <Row>
                <Col
                    xs={12}
                    lg={7}
                >
                    <img
                        src={`/event/${id}.webp`}
                        className="w-100"
                    />
                </Col>
                <Col
                    xs={12}
                    lg={5}
                    className="d-flex flex-column justify-content-between"
                >
                    <div>
                        Thông tin sự kiện:
                        <ul>
                            <li>
                                <b>{title}</b>
                            </li>
                            <li>
                                <b>Thời gian:</b>{' '}
                                {monthNames[dateObj.getMonth()]}
                                {', '}
                                {dateObj.getFullYear()}
                            </li>
                            {location && (
                                <li>
                                    <b>Đia điểm:</b> {location}
                                </li>
                            )}
                        </ul>
                    </div>
                    <div className="text-end">
                        <a
                            href={`/event/${id}`}
                            className="link cta"
                        >
                            Xem chi tiết sự kiện{' '}
                            <img
                                src="/icon/right-angle.webp"
                                className="prefix-icon"
                            />
                        </a>
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default EventTile;
