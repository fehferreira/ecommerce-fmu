import React from 'react';
import { HeaderStyled, LinkSell, LinkRegister, LogoHeader, SubMenu } from './style';
import SearchBar from '../../components/SearchBar';
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
    <SearchBar />
  </HeaderStyled>
);

export default Header;
