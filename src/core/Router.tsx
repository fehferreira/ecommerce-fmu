import React from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import { ContainerStyled } from './styles';
import Header from '../containers/Header';
import NavBar from '../containers/NavBar';

const Router: React.FC<unknown> = () => (
	<ContainerStyled>
		<Header />
		<NavBar />
		<BrowserRouter>
			<Routes />
		</BrowserRouter>
	</ContainerStyled>
);

export default Router;
