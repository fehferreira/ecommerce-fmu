import React from 'react';
import { HeaderStyled, LinkSell, LinkRegister, LogoHeader, SubMenu } from './style';
import logo from '../../assets/images/logoImage.png';

const Header: React.FC = () => (
  <HeaderStyled>
    <LogoHeader>
      <img src={logo} alt='Logo' />
    </LogoHeader>
    <SubMenu>
      <LinkSell href='/#'>Sell on Shopka</LinkSell>
      <LinkRegister href='/#'>Register</LinkRegister>
    </SubMenu>
  </HeaderStyled>
);

export default Header;
