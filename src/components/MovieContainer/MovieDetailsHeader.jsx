import React from 'react';
import PropTypes from 'prop-types';
import { Button, Col, Icon, Row } from 'react-materialize';
import { Store } from '../../store';
import { addFavourite, removeFavourite } from '../../store/reducers/ducks/favourites';
import styled from 'styled-components';
import BackButtonStructure from '../Structures/BackButtonStructure';

const StyledDetails = styled.span`
    font-size: 15px;
    &::after{
        content: "|";
        padding-left: 20px;
        padding-right: 20px;
    }
`;

const detailsOrder = [
    'Rated', 'Runtime', 'Genre', 'Released', 'Country'
]

const MovieDetailsHeader = props => {

    const toggleFavourite = () => {
        Store.dispatch(props.isFavourite
            ? removeFavourite(props.movieData.imdbID)
            : addFavourite({
                Title: props.movieData.Title,
                Year: props.movieData.Year,
                imdbID: props.movieData.imdbID,
                Type: props.movieData.Type,
                Poster: props.movieData.Poster
            })
        );
    }

    return (
        <div className="animate__animated animate__fadeIn">
            <BackButtonStructure renderRow/>
            <Row>
                <Col s={12} m={12} l={12} xl={12}>
                    <h5 className="teal-text text-darken-4">
                        <Icon>theaters</Icon>
                        {props.movieData.Title}
                        <span className="grey-text s20">  ({props.movieData.Year})  </span>
                    </h5>
                </Col>
                <Col s={12} m={12} l={12} xl={12} className="pad1">
                    {detailsOrder.map(d => 
                        <StyledDetails key={`header-${d}`} className="grey-text text-darken-1">
                            {props.movieData[d]}
                        </StyledDetails>
                    )}
                </Col>
                <Col s={12} m={12} l={12} xl={12}>
                    <Button flat
                        onClick={toggleFavourite}
                        className={
                            props.isFavourite 
                                ? 'red-text text-darken-3' 
                                : 'indigo-text'
                        } 
                        icon={
                            <Icon className="s16">{props.isFavourite ? 'favorite' : 'favorite_border'}</Icon>
                            }>
                        {props.isFavourite 
                            ? 'Remover dos favoritos' 
                            : 'Adicionar aos favoritos'
                        }
                    </Button>
                </Col>
            </Row>
        </div>
    )
}

MovieDetailsHeader.propTypes = {
    movieData : PropTypes.object.isRequired,
    isFavourite : PropTypes.bool.isRequired,
}


export default MovieDetailsHeader;