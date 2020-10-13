import React from 'react';
import PropTypes from 'prop-types';
import { Col, Icon, Row } from 'react-materialize';

const FavouritesListHeader = props => {

    return (
        <Row>
            <Col m={10} s={12}>
                <h5 className="teal-text text-darken-4">
                    <Icon>loyalty</Icon>
                    Meus Favoritos 
                    <span className="grey-text s20"> ({props.favourites.length} itens encontrados ) </span>
                </h5>
            </Col>
        </Row>
    )

}

FavouritesListHeader.propTypes = {
    favourites : PropTypes.array.isRequired
}

export default FavouritesListHeader;