import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-materialize';
import MovieCard from './MovieCard';
import styled from 'styled-components';

const StyledMovieCol = styled(Col)`
    float: none !important;
    display: inline-block;
    text-align: start !important;
    vertical-align: top !important;
`;

const SearchResults = props => {

    return (
        <div>
            <Row>
                {props.results.map((movie, index) => 
                    <React.Fragment key={`movie-${index}`}>
                        {(index === 0 || index === 5) && //? Cols de preenchimento para layout em desktop - 5 filmes por linha
                            <StyledMovieCol 
                                l={1} 
                                className="hide-on-med-and-down"/>
                        }
                        <StyledMovieCol 
                            l={2} 
                            m={6} 
                            s={12}>
                            <MovieCard movie={movie}/>
                        </StyledMovieCol>
                        {(index === 4 || index === 9) && //? Cols de preenchimento para layout em desktop - 5 filmes por linha
                            <StyledMovieCol 
                                l={1} 
                                className="hide-on-med-and-down"/>
                        }
                    </React.Fragment>
                )}
            </Row>
        </div>
    );

}

SearchResults.propTypes = {
    results : PropTypes.array
}

export default SearchResults;