import React from 'react';
import { InputSearch, SearchBarContainer, ContainerIcon, ClearButton } from './style';
import searchIcon from '../../assets/images/searchIcon.png';
import closeIcon from '../../assets/images/closeIcon.png';

const SearchBar: React.FC = () => {
    return (
        <SearchBarContainer>
            <ContainerIcon>
                <img src={searchIcon} alt='Logo' width="17.5px" height="17.5px" />
            </ContainerIcon>
            <InputSearch />
            <ContainerIcon>
                <ClearButton>
                    <img src={closeIcon} alt='Logo' width="14px" height="14px" />
                </ClearButton>
            </ContainerIcon>
        </SearchBarContainer>
    );
};

export default SearchBar;