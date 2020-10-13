import React from 'react';
import { Col } from 'react-materialize';
import favIcon from '../../assets/img/fav.svg'

const FavouritesNotFound = () => {

    return (
        <Col s={12} className="pad2 center-align">
            <span className="s30 grey-text">
                Vazio! Nenhum filme adicionado nos seus favoritos até o momento...
            </span>
            <div className="pad1">
                <img alt="icon" src={favIcon} className="grey-text text-lighten-1" height="60px"/>
            </div>
        </Col>
    )

}

export default FavouritesNotFound;