/* eslint-disable react/prop-types */
import React from 'react';
import './style.css';
import clsx from 'clsx';

const Section = ({
    scheme = 'blue',
    children,
    className,
    paddingVertical = 'py-5',
    wrap = false,
}) => {
    return (
        <section
            className={clsx(
                `section ${paddingVertical}`,
                scheme,
                className,
                wrap && 'wrap',
            )}
        >
            {children}
        </section>
    );
};

export default Section;
