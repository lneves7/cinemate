import React, { useEffect, useState } from 'react';
import { Icon, Navbar, NavItem } from 'react-materialize';
import SearchContainer from '../SearchContainer/SearchContainer';
import './App.css';
import logo from '../../assets/img/logo.svg';

function App() {

  const [viewMode, setViewMode] = useState('search');

  const getContent = () => {
    switch(viewMode){
      case 'search':
        return <SearchContainer />
      case 'favorites':
        return <h1>Modo favoritos!</h1> 
      case 'history':
        return <h1>Modo historico!</h1>
      default: 
        return <div/>
    }
  }

  return (
    <div className="App-container">
      <header>
        <Navbar className="animate__animated animate__slideInDown" 
          alignLinks="right" 
          centerLogo 
          brand={
            <img className="brand-logo" height="55px" src={logo} alt="logo"></img>
            } 
          id="nav">
          <NavItem onClick={() => setViewMode('favorites')} className="darktxt">
            <Icon left> favorite </Icon>
              Meus Favoritos
          </NavItem>
          <NavItem onClick={() => setViewMode('history')} className="darktxt">
            <Icon left> history </Icon>
              Histórico de Pesquisa
          </NavItem>
        </Navbar>
      </header> 
      {getContent()}
    </div>
  );
}

export default App;
