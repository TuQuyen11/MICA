/* eslint-disable react/no-children-prop */
/* eslint-disable react/prop-types */
import React from 'react';
import clsx from 'clsx';
import EffectCard from '../EffectCard';

const FlyInCard = ({
    children,
    from = 'top', // top, right, bottom, left
    delay = 0,
    duration = 800,
    className = '',
}) => {
    const localClassName = clsx(`fly-from-${from}`, className);

    return (
        <EffectCard
            delay={delay}
            duration={duration}
            effectClassName={`fly-in-card`}
            className={localClassName}
            children={children}
        />
    );
};

export default FlyInCard;
