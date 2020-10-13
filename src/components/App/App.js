import React from 'react';
import { Icon, Navbar, NavItem } from 'react-materialize';
import { Store } from '../../store';
import { connect } from 'react-redux';
import { setViewMode, VIEW_MODE_FAVOURITES, VIEW_MODE_MOVIE, VIEW_MODE_SEARCH } from '../../store/reducers/ducks/viewMode';
import SearchContainer from '../SearchContainer/SearchContainer';
import MovieContainer from '../MovieContainer/MovieContainer';
import '../../assets/css/App.css';
import logo from '../../assets/img/logo.svg';

const App = props => {

  const getAppContent = () => {
    switch(props.viewModeRx){
      case VIEW_MODE_SEARCH:
        return <SearchContainer />
      case VIEW_MODE_FAVOURITES:
        return <h1>Modo favoritos!</h1> 
      case VIEW_MODE_MOVIE:
        return <MovieContainer />
      default: 
        return <div/>
    }
  }

  const changeViewMode = (vm) => {
    Store.dispatch(setViewMode(vm));
  }

  return (
    <div className="App-container">
      <header>
        <Navbar className="animate__animated animate__slideInDown" 
          alignLinks="right" 
          centerLogo 
          brand={
            <img 
              onClick={() => changeViewMode(VIEW_MODE_SEARCH)} 
              className="brand-logo click" 
              height="55px" 
              src={logo} 
              alt="logo"></img>
          } 
          id="nav">
          <NavItem onClick={() => changeViewMode(VIEW_MODE_FAVOURITES)} className="darktxt">
            <Icon left> favorite </Icon>
              Meus Favoritos
          </NavItem>
          <NavItem className="darktxt">
            <Icon left> history </Icon>
              Histórico de Pesquisa
          </NavItem>
        </Navbar>
      </header> 
      {getAppContent()}
    </div>
  );
}

const mapStateToProps = state => ({
  viewModeRx: state.viewMode.value
})

export default connect(mapStateToProps)(App);
