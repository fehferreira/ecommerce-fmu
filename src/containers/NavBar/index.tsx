import React from 'react';
import { NavBarContainer } from './style';
import navBarValues from '../../model/iconNavBar';
import CardNavBar from '../../components/CardNavBar';

interface NavBarProps {
    tabActive: number,
};

const NavBar: React.FC<NavBarProps> = ({tabActive}) => {
    return (
        <NavBarContainer>
        {navBarValues.map((card, index) => (
            <CardNavBar key={index} name={card.name} ImgSVG={card.img} isActive={tabActive === card.id} />
        ))}
        </NavBarContainer>
    );
};

export default NavBar;
