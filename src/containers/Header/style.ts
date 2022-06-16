import styled from 'styled-components';

export const HeaderStyled = styled.div`
    width: auto;
    height: 88px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 16px;
    padding-right: 16px;

    font-family: 'Inter', sans-serif;
    font-size: 27px;
`;

export const LogoHeader = styled.div`
    width: 208px;
    height: 88px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const SubMenu = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const LinkSell = styled.a`
    color: #5a5b6a;
    font-weight: 500;
    text-decoration: none;
    padding: 6px 16px;
`;

export const LinkRegister = styled.a`
    color: #5a5b6a;
    font-weight: 400;
    text-decoration: none;
    padding: 6px 16px;
`;
