/* eslint-disable react/prop-types */
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';

const NewsTile = ({ id, landscape = false }) => {
    const [loaded, setLoaded] = useState(false);
    const [news, setNews] = useState(null);

    const { title = '', date = '', shortContent = '', tags = [] } = news || {};

    useEffect(() => {
        const fetchNews = async () => {
            const jsonData = await fetch(`/json/posts/${id}.json`);
            const news = await jsonData.json();
            setNews(news);
        };

        fetchNews();
    }, [id]);

    useEffect(() => {
        if (news) {
            setLoaded(true);
        }
    }, [news]);

    return (
        loaded && (
            <div
                className={clsx(
                    'news-tile p-3 rounded-3 mb-4',
                    landscape && 'landscape',
                )}
            >
                <Row>
                    <Col
                        xs={12}
                        lg={landscape ? 3 : 12}
                    >
                        <img
                            src={`/post/${id}.webp`}
                            className={clsx(
                                'rounded-3 w-100 mb-4',
                                landscape && 'mb-lg-0',
                            )}
                        />
                    </Col>
                    <Col
                        xs={12}
                        lg={landscape ? 9 : 12}
                        className="d-flex flex-column justify-content-between"
                    >
                        <div>
                            <a
                                href={`/post/${id}`}
                                className="link"
                            >
                                {title.length > 60 ? title.substring(0, 60) + '...' : title}
                            </a>
                            <div className="publish-date">{date}</div>
                            <div className="py-3 preview-content">
                                {shortContent.length > 100 ? shortContent.substring(0, 100) + '...' : shortContent}
                            </div>
                        </div>
                        <div className="tags">
                            {tags.map((tag, index) => (
                                <span
                                    className="tag"
                                    key={index}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </Col>
                </Row>
            </div>
        )
    );
};

export default NewsTile;
