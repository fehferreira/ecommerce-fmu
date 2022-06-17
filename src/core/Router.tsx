import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ContainerStyled } from './styles';
import Header from '../containers/Header';
import Home from '../page/Home';

const Router: React.FC = () => (
  <ContainerStyled>
    <Header />
    <BrowserRouter>
      <Routes>
      </Routes>
    </BrowserRouter>
  </ContainerStyled>
);

export default Router;
