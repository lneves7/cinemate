import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle, Col, Icon, Row } from 'react-materialize';
import styled from 'styled-components';

const StyledMovieCard = styled(Card)`
    box-shadow: 0px 0px 6px #0000007d;
`;


const MovieCard = props => {

    return (
        <StyledMovieCard 
            className="animate__animated animate__fadeInUp" 
            header={ <CardTitle image={props.movie.Poster}></CardTitle> }
            >
            <Row>
                <Col s={12} className="s17 f600">
                {`${props.movie.Title} (${props.movie.Year})`}
                </Col>
            </Row>
            <Row>
                <Col s={9}>
                    <a className="darktxt link s17" key="details" href="#">
                        Ver detalhes
                    </a>
                </Col>
                <Col s={3}>
                    <a className="darktxt" key="like" href="#">
                        <Icon className="hide-on-large-only" medium> favorite_border </Icon>
                        <Icon className="hide-on-med-and-down"> favorite_border </Icon>
                    </a>
                </Col>
            </Row>
        </StyledMovieCard>
    )

}

MovieCard.propTypes = {
    movie : PropTypes.object
}

export default MovieCard;