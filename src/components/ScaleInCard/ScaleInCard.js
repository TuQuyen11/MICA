/* eslint-disable react/prop-types */
/* eslint-disable react/no-children-prop */
import React from 'react';
import EffectCard from '../EffectCard';

const ScaleInCard = ({ className, delay = 0, duration = 600, children }) => {
    return (
        <EffectCard
            className={className}
            delay={delay}
            duration={duration}
            effectClassName={`scale-in-card`}
            children={children}
        />
    );
};

export default ScaleInCard;
