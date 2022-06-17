import React from 'react';
import { HeaderStyled, LinkSell, LinkRegister, LogoHeader, SubMenu, LinkEletronics } from './style';
import SearchBar from '../../components/SearchBar';
import ProfileMenu from '../../components/ProfileMenu';
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
    <SubMenu width={242}>
        <LinkEletronics href='/#'>Consumer Electronics</LinkEletronics>
    </SubMenu>
    <ProfileMenu />
  </HeaderStyled>
);

export default Header;
