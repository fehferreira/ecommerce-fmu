import React from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import { ContainerStyled } from './styles';
import Header from '../containers/Header';
import NavBar from '../containers/NavBar';

const Router: React.FC = () => {

  return(
    <ContainerStyled>
      <Header />
      <NavBar tabActive={1} />
      <BrowserRouter>
        <Routes>
        </Routes>
      </BrowserRouter>
    </ContainerStyled>
  )
};

export default Router;
