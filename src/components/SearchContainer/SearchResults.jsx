import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Col, Row } from 'react-materialize';
import M from 'materialize-css';
import { Store } from '../../store';
import { changeSearchResults, setActivePage } from '../../store/reducers/ducks/search';
import MovieCard from './MovieCard';
import SearchResultsHeader from './SearchResultsHeader';
import PaginationStructure from '../Structures/PaginationStructure';
import SpinnerStructure from '../Structures/SpinnerStructure';
import MovieApi from '../../api/MovieApi';

const StyledMovieCol = styled(Col)`
    float: none !important;
    display: inline-block;
    text-align: start !important;
    vertical-align: top !important;
`;

const SearchResults = props => {

    const [pageLoader, setPageLoader] = useState(false);
    const containerRef = useRef();

    //? Indicador do total de páginas
    const pageCount = Math.ceil(Number(props.searchRx.results.totalResults) / 10);

    //? Buscar nova página da pesquisa
    const fetchSearchPage = page => {
        
        setPageLoader(true);
        Store.dispatch(setActivePage(page));

        MovieApi().fetchMovies(props.searchRx.results.query, page)
        .then(response => {
            response.data.query = props.searchRx.results.query;
            Store.dispatch(changeSearchResults(response.data));
        })
        .catch((error) => {
            M.toast({
                html: 'Opa! Ocorreu um erro inesperado...'
            });
            console.log(error);
        })
        .finally(() => {
            setPageLoader(false);
        })
    };

    return (
        <div ref={containerRef}>
            <SearchResultsHeader 
                searchRx={props.searchRx} />
            <PaginationStructure 
                activePage={props.searchRx.activePage}
                pageCount={pageCount}
                selectCallback={(page) => fetchSearchPage(page)}/>
            <Row>
                {props.searchRx.results.Search.map((movie, index) => 
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
                            <MovieCard movie={movie} favourites={props.favouritesRx}/>
                        </StyledMovieCol>
                        {(index === 4 || index === 9) && //? Cols de preenchimento para layout em desktop - 5 filmes por linha
                            <StyledMovieCol 
                                l={1} 
                                className="hide-on-med-and-down"/>
                        }
                    </React.Fragment>
                )}
            </Row>
            <PaginationStructure 
                activePage={props.searchRx.activePage}
                pageCount={pageCount}
                selectCallback={(page) => fetchSearchPage(page)}/>
            {pageLoader && 
                <SpinnerStructure active modal size="big"/>
            }
        </div>
    );

}

SearchResults.propTypes = {
    searchRx : PropTypes.object,
    favouritesRx: PropTypes.array
}

export default SearchResults;