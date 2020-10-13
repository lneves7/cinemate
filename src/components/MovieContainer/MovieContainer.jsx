import React from 'react';
import { Col,  Row } from 'react-materialize';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Background from '../Background/Background';
import MovieDetails from './MovieDetails';

const MovieDetailsContainer = styled(Col)`
    background-color: #FFF;
    box-shadow: 0px 0px 6px #0000007d;
    padding: 1.3em !important;
    margin-top: 2rem;
`;


const MovieContainer = (props) => {

    return (
        <Background className="animate__animated animate__fadeIn">
            <Row>
                <MovieDetailsContainer s={12}>
                    <MovieDetails favouritesRx={props.favouritesRx} movieRx={props.viewModeMovieRx}/>
                </MovieDetailsContainer>                    
            </Row>
        </Background>
    )

}

const mapStateToProps = state => ({
    favouritesRx: state.favourites.movies,
    viewModeMovieRx: state.viewMode.movie
})

export default connect(mapStateToProps)(MovieContainer);