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
    font-size: 20px;
`;

export const LogoHeader = styled.div`
    width: 208px;
    height: 88px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const SubMenu = styled.div<{width?: number}>`
    width: ${props => props.width ? `${props.width}px` : `auto`};
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const DefaultLink = styled.a`
    color: #5a5b6a;
    text-decoration: none;
    padding: 6px 16px;
    white-space: nowrap;
`;

export const LinkSell = styled(DefaultLink)`
    font-weight: 500;
`;

export const LinkRegister = styled(DefaultLink)`
    font-weight: 400;
`;

export const LinkEletronics = styled.a`
    color: #2264d1;
    font-weight: 400;
    text-decoration: none;
    padding: 6px 16px;
`;
