import React from 'react';

const EletricalToolsSVG: React.FC<React.SVGAttributes<SVGElement>> = ({color}) => (
    <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0H10L6.5 7H10L3 20V12H0V0ZM2 2V10H5V12.66L7 9H3.24L6.76 2H2Z" fill={color}/>
    </svg>
);

export default EletricalToolsSVG;
