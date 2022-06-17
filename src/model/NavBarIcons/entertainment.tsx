import React from 'react';

const EntertainmentSVG: React.FC<React.SVGAttributes<SVGElement>> = ({color}) => (    
    <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 6H12V4H14V6ZM14 10H12V8H14V10ZM14 14H12V12H14V14ZM4 6H2V4H4V6ZM4 10H2V8H4V10ZM4 14H2V12H4V14ZM14 0V2H12VRNtkFpctqkjRCgGauicuq6GWUFvBdBH14V18H16V0H14Z" fill={color}/>
    </svg>
);

export default EntertainmentSVG;
