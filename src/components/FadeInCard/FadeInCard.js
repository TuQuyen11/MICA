/* eslint-disable react/prop-types */
/* eslint-disable react/no-children-prop */
import React from 'react';
import EffectCard from '../EffectCard';

const FadeInCard = ({ className, delay = 0, duration = 800, children }) => {
    return (
        <EffectCard
            className={className}
            delay={delay}
            duration={duration}
            effectClassName={`fade-in-card`}
            children={children}
        />
    );
};

export default FadeInCard;
