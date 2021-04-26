import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
import AddCase from './pages/CRUD/Case/AddCase';
import Case from './pages/CRUD/Case/Case';
import CaseList from './pages/CRUD/Case/CaseList';
import CRUD from './pages/CRUD/HomeCRUD';


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
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path='/login'>
          <Login/>
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/components">
          <ComponentsList />
        </Route>
        <Route exact path="/startconfig">
          <StartConfig />
        </Route>
        <Route exact path="/Configurator/Step1">
          <Step1 />
        </Route>
        <Route exact path="/Configurator/Step2">
          <Step2 />
        </Route>
        <Route exact path="/Configurator/Step3">
          <Step3 />
        </Route>
        <Route exact path="/Configurator/Step4">
          <Step4 />
        </Route>
        <Route exact path="/Configurator/Step5">
          <Step5 />
        </Route>
        <Route exact path="/Configurator/Step6">
          <Step6 />
        </Route>
        <Route exact path="/Configurator/Step7">
          <Step7 />
        </Route>
        <Route exact path="/admin">
          <CRUD />
        </Route>
        <Route exact path="/Configurator/Step8">
          <Step8 />
        </Route>
        <Route exact path="/Configurator/Step9">
          <Step9 />
        </Route>
        <Route exact path="/Configurator/Resume">
          <Final />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
