import React from 'react';

const PetsSVG: React.FC<React.SVGAttributes<SVGElement>> = ({color}) => (
    <svg width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 7C6 7.79565 5.68393 8.55871 5.12132 9.12132C4.55871 9.68393 3.79565 10 3 10C2.20435 10 1.44129 9.68393 0.87868 9.12132C0.316071 8.55871 0 7.79565 0 7C0 6.23 0.29 5.53 0.76 5C0.29 4.47 0 3.77 0 3C0 2.20435 0.316071 1.44129 0.87868 0.87868C1.44129 0.316071 2.20435 0 3 0C3.79565 0 4.55871 0.316071 5.12132 0.87868C5.68393 1.44129 6 2.20435 6 3C7.33 3.08 8.67 3.17 10 3.17C11.33 3.17 12.67 3.08 14 3C14 2.20435 14.3161 1.44129 14.8787 0.87868C15.4413 0.316071 16.2044 0 17 0C17.7956 0 18.5587 0.316071 19.1213 0.87868C19.6839 1.44129 20 2.20435 20 3C20 3.77 19.71 4.47 19.24 5C19.71 5.53 20 6.23 20 7C20 7.79565 19.6839 8.55871 19.1213 9.12132C18.5587 9.68393 17.7956 10 17 10C16.2044 10 15.4413 9.68393 14.8787 9.12132C14.3161 8.55871 14 7.79565 14 7C12.67 6.92 11.33 6.83 10 6.83C8.67 6.83 7.33 6.92 6 7Z" fill={color}/>
    </svg>
);

export default PetsSVG;