import styled from 'styled-components';

export const SearchBarContainer = styled.div`
    width: 672px;
    height: 48px;
    background-color: #ededf0;

    margin-left: 100px;
    padding: 8px;
    border-radius: 99px;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`;

export const ContainerIcon = styled.div`
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const InputSearch = styled.input`
    margin-left: 4px;
    width: 100%;
`;

export const ClearButton = styled.button`
    border: none;

    &:hover {
        cursor: pointer;
    }
`;