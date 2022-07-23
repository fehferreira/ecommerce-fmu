import React from 'react';
import { CardContainer, CardLabel } from './style';

interface CardNavBarProps {
  name: string;
  ImgSVG: React.FC<React.SVGAttributes<SVGElement>>;
  isActive: boolean;
  onChange: Function;
}

const CardNavBar: React.FC<CardNavBarProps> = ({ name, ImgSVG, isActive, onChange }) => (
  <CardContainer isActive={isActive} onClick={() => onChange()}>
    <ImgSVG color={isActive ? '#2979ff' : '#9696A0'} />
    <CardLabel>{name}</CardLabel>
  </CardContainer>
);

export default CardNavBar;
