import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { MenuProvider } from './state';
import  Navbar  from './components/Navbar/nav/index';
import HomePage from './pages/HomePage';
import StartConfig from './pages/Configurator/StartConfig';
import Step1 from './pages/Configurator/Step1/Step1';
import Step2 from './pages/Configurator/Step2/Step2';
import Step3 from './pages/Configurator/Step3/Step3';
import Step4 from './pages/Configurator/Step4/Step4';
import Step5 from './pages/Configurator/Step5/Step5';
import Step6 from './pages/Configurator/Step6/Step6';
import Step7 from './pages/Configurator/Step7/Step7';
import Login from './pages/Authentication/Login';
import ComponentsList from './pages/ComponentsList/ComponentsList';
import Register from './pages/Authentication/Register';
import Step8 from './pages/Configurator/Step8/Step8';
import Step9 from './pages/Configurator/Step9/Step9';
import Final from './pages/Configurator/Final/Final';

const GlobaleStyle = createGlobalStyle`
  ${reset};
  html {
    box-sizing: border-box;
  }
  body {
    font-family: "Montserrat", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: var(--bg);
    color: var(--text);
  }
  * {
    margin: 0;
    padding: 0;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  
  a {
    text-decoration: none;
  }
`;


const App = () => {
  return (
    <Router>
      <div className="App">
        <GlobaleStyle />
        <MenuProvider>
          <Navbar />
        </MenuProvider>
      </div>
        <Route component={HomePage} exact path="/" />
        <Route component={Login} path="/login" />
        <Route component={Register} path="/register" />
        <Route component={ComponentsList} path="/components" />
        <Route component={StartConfig} path="/startconfig" />
        <Route component={Step1} path="/Configurator/Step1"  />
        <Route component={Step2} path="/Configurator/Step2"  />
        <Route component={Step3} path="/Configurator/Step3"  />
        <Route component={Step4} path="/Configurator/Step4"  />
        <Route component={Step5} path="/Configurator/Step5"  />
        <Route component={Step6} path="/Configurator/Step6"  />
        <Route component={Step7} path="/Configurator/Step7"  />
        <Route component={Step8} path="/Configurator/Step8" />
        <Route component={Step9} path="/Configurator/Step9" />
        <Route component={Final} path="/Configurator/Resume" />
    </Router>
  )
}

export default App;
