import React from 'react';
import { AppStyled, GlobalStyled } from './styles';

const App : React.FC = () => (
    <>
        <GlobalStyled />
        <AppStyled>
            <h1>Hello World!</h1>
        </AppStyled>
    </>
);

export default App;