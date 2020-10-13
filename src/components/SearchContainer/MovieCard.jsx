import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button, Card, CardTitle, Col, Icon, Row } from 'react-materialize';
import { Store } from '../../store';
import { addFavourite, removeFavourite } from '../../store/reducers/ducks/favourites';
import posterPlaceholder from '../../assets/img/film-poster-placeholder.png'
import M from 'materialize-css';
import { setMovieMode } from '../../store/reducers/ducks/viewMode';

const StyledMovieCard = styled(Card)`
    box-shadow: 0px 0px 6px #0000007d;
    transition: transform 0.8s !important;

    @media(min-width: 992px) {
        &:hover{
            transform: scale(1.1) !important;
        }
    }
`;  

const StyledFavouriteButton = styled(Button)`
    padding: 0px;
    border-radius: 10px;

    &:hover{
        background-color:#32a865;
        color: #fff !important;
    }

    i { font-size: 25px }

    @media(max-width: 992px) {
        i { font-size: 4rem }
    }
`;

const MovieDetailsLink = styled.span`
    font-size: 17px;
    color: #265753;
    text-decoration: underline;
    padding: 5px;
    border-radius: 5px;
    cursor:pointer;

    &:hover{
        background-color:#32a865;
        color: #fff !important;
    }
`;


const MovieCard = props => {

    const imageSrc = (!props.movie.Poster || props.movie.Poster === 'N/A') 
        ? posterPlaceholder
        : props.movie.Poster; 

    const isFavourite = props.favourites.some(f => f.imdbID === props.movie.imdbID);

    const toggleFavourite = () => {
        Store.dispatch(isFavourite
            ? removeFavourite(props.movie.imdbID)
            : addFavourite(props.movie)
        );
        M.toast({
            html : `"${props.movie.Title}" foi ${isFavourite ? "removido dos" : "adicionado aos"}  seus favoritos`
        })
    }

    return (
        <div className="animate__animated animate__fadeInUp">
            <StyledMovieCard 
                header={ <CardTitle image={imageSrc}></CardTitle> }>
                <Row>
                    <Col s={12} className="s17 f600">
                        {`${props.movie.Title} (${props.movie.Year})`}
                    </Col>
                </Row>
                <Row>
                    <Col s={9}>
                        <MovieDetailsLink onClick={() => Store.dispatch(setMovieMode(props.movie.imdbID))}>
                            Ver detalhes
                        </MovieDetailsLink>
                    </Col>
                    <Col s={3} className="pad0">
                        <StyledFavouriteButton 
                            flat 
                            onClick={() => toggleFavourite()}
                            tooltip={isFavourite ? "Remover dos favoritos" : "Adicionar aos favoritos"} 
                            className="darktxt">
                            <Icon>{isFavourite ? "favorite" : "favorite_border"}</Icon>
                        </StyledFavouriteButton>
                    </Col>
                </Row>
            </StyledMovieCard>
        </div>
    )

}

MovieCard.propTypes = {
    movie : PropTypes.object,
    favourites : PropTypes.array
}

export default MovieCard;