import React from "react";
import Router from "./Router";
import { AppStyled, GlobalStyled } from "./styles";

const App: React.FC = () => (
  <>
    <GlobalStyled />
    <AppStyled>
      <Router />
    </AppStyled>
  </>
);

export default App;
