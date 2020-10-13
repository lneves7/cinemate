import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MovieApi from '../../api/MovieApi';
import { Col, Collection, CollectionItem, MediaBox, Row } from 'react-materialize';
import SpinnerStructure from '../Structures/SpinnerStructure';
import MovieDetailsHeader from './MovieDetailsHeader';
import MovieDetailsRating from './MovieDetailsRating';

const detailsOrder = [
    {field: 'Director', label: 'Diretor(es)'},
    {field: 'Writer', label: 'Escritor(es)'},
    {field: 'Plot', label: 'Sinopse'},
    {field: 'Language', label: 'Idiomas'},
    {field: 'Awards', label: 'Prêmios e nomeações'},
    {field: 'Production', label: 'Produção'},
]

const MovieDetails = props => {

    const [movieData, setMovieData] = useState(false);

    const isFavourite = props.favouritesRx.some(f => f.imdbID === props.movieRx);

    useEffect(() => {
        MovieApi().fetchMovieData(props.movieRx)
            .then(response => {
                if(response.data.Response === 'True'){
                    setMovieData(response.data);
                } else {

                }
            })
            .catch(error => {
                console.log(error);
            })
    }, [props.movieRx])

    return (
        movieData ? (
            <div>
                <MovieDetailsHeader 
                    isFavourite={isFavourite} 
                    movieData={movieData} />
                <Row>
                    <Col m={4} l={3} s={12} className="animate__animated animate__fadeInLeft">
                        <MediaBox options={{ inDuration: 275, outDuration: 200 }}>
                            <img alt="Poster" src={movieData.Poster} width="100%"/>
                        </MediaBox>
                    </Col>
                    <Col m={8} l={9} s={12} className="animate__animated animate__fadeInRight">
                        <Collection header="Informações do filme">
                            {detailsOrder.map(d => 
                                <CollectionItem key={`info-${d.field}`}>
                                    <span className="teal-text text-darken-3 s16">{d.label}:</span>
                                    <div>
                                        <span className="grey-text text-darken-3 s16">{movieData[d.field]}</span>
                                    </div>
                                </CollectionItem>
                            )}
                            <CollectionItem>
                                <span className="teal-text text-darken-3 s16">
                                    Avaliações:
                                </span>
                                <MovieDetailsRating ratings={movieData.Ratings}/>
                            </CollectionItem>
                        </Collection>
                    </Col>
                </Row>
            </div>
        ) : (
            <Row>
                <Col s={12} className="pad2 center-align">
                    <SpinnerStructure active label="Carregando as informações do filme... aguarde..." size="big"/>
                </Col>
            </Row>
        )
    )

}

MovieDetails.propTypes = {
    movieRx: PropTypes.string.isRequired,
    favouritesRx: PropTypes.array.isRequired
}

export default MovieDetails;