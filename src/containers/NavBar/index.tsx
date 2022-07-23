import React, { useState } from 'react';
import { NavBarContainer } from './style';
import navBarValues from '../../model/iconNavBar';
import CardNavBar from '../../components/CardNavBar';

const NavBar: React.FC<unknown> = () => {
  const [tabActive, setTabActive] = useState(1);

  const handleChange = (event: React.MouseEvent<HTMLElement>) => {
    console.log(event);
  };

  return (
    <NavBarContainer>
      {navBarValues.map((card) => (
        <CardNavBar
          key={card.name}
          name={card.name}
          ImgSVG={card.img}
          isActive={tabActive === card.id}
          onChange={handleChange}
        />
      ))}
    </NavBarContainer>
  );
};

export default NavBar;
