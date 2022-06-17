import styled from 'styled-components';

export const ProfileFunctionContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-left: 100px;
`;

export const DefaultButton = styled.button`
    width: 100px;
    height: 40px;

    color: #2264d1;
    background-color: transparent;

    font-family: 'Quicksand', sans-serif;
    font-weight: bold;
    font-size: 20px;
    text-align: center;
    border-radius: 4px;

    &:hover {
        cursor: pointer;
    };
`;

export const ProfileButton = styled(DefaultButton)`
    border: 3px solid #9dc2ff;
    
`;

export const CartButton = styled(DefaultButton)`
    border: none;
    box-shadow: 0 2px 4px rgb(27, 78, 163, 0.8), 0 4px 8px rgb(41, 121, 255, 0.8);
`;

export const ImgIcon = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 90%;
`;
