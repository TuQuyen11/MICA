import React from 'react';
import './style.css';

const links = [
    {
        name: 'x',
        url: 'https://x.com/',
        icon: 'twitter',
    },
    {
        name: 'facebook',
        url: 'https://www.facebook.com/',
        icon: 'facebook',
    },
    {
        name: 'linkedIn',
        url: 'https://linkedin.com/',
        icon: 'linkedin',
    },
    {
        name: 'youtube',
        url: 'https://www.youtube.com/',
        icon: 'youtube',
    },
];

const SocialMediaLinks = () => {
    return (
        <ul className="list-unstyled d-flex mb-0">
            {links.map(({ name, url, icon }) => (
                <li key={name}>
                    <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="d-block py-2 px-2 social-icon"
                    >
                        <img
                            src={`/social/${icon}.webp`}
                            alt={name}
                            width="32"
                            height="32"
                        />
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default SocialMediaLinks;
