/* eslint-disable react/prop-types */
import React from 'react';

import clsx from 'clsx';
import { useInView } from 'react-intersection-observer';
import './style.css';

const EffectCard = ({
    delay = 0,
    duration = 800,
    children,
    className = '',
    effectClassName,
}) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        rootMargin: '40px 0px',
    });

    const style = {};

    if (delay > 0) {
        style.transitionDelay = `${delay}ms`;
    }

    if (duration > 0) {
        style.transitionDuration = `${duration}ms`;
    }

    return (
        <div
            ref={ref}
            className={clsx(className, effectClassName, inView && 'active')}
            style={style}
        >
            {children}
        </div>
    );
};

export default EffectCard;
