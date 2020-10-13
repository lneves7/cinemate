import React, { useEffect, useState } from 'react';
import { Row } from 'react-materialize';
import { connect } from 'react-redux';
import {StyledMovieCol} from '../SearchContainer/SearchResults'
import MovieCard from '../SearchContainer/MovieCard';
import FavouritesListHeader from './FavouritesListHeader';
import FavouritesNotFound from './FavouritesNotFound';
import PaginationStructure from '../Structures/PaginationStructure';

const FavouritesList = props => {

    //? Indicador do total de páginas
    const pageCount = Math.ceil(Number(props.favouritesRx.length) / 10);
    //? Página atual
    const [activePage, setActivePage] = useState(1);
    //? Itens que aparecem de fato na tela
    const [favItems, setFavItems] = useState([]);

    //? Paginação Fx
    useEffect(() => {
        setFavItems([...
            props.favouritesRx.slice(
                (((activePage - 1) * 10)), 
                ((10 * activePage ))
            )
        ]);
    }, [activePage, props.favouritesRx])

    return (
        <div>
            <FavouritesListHeader favourites={props.favouritesRx}/>
            {pageCount > 1 &&
                <PaginationStructure 
                    activePage={activePage}
                    pageCount={pageCount}
                    selectCallback={(page) => setActivePage(page)}/>
            }
            <Row>
                {props.favouritesRx.length > 0 && favItems.map((movie, index) => 
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
                {props.favouritesRx.length === 0 && (
                    <FavouritesNotFound />
                )}  
            </Row>
            {pageCount > 1 &&
                <PaginationStructure 
                    activePage={activePage}
                    pageCount={pageCount}
                    selectCallback={(page) => setActivePage(page)}/>
            }
        </div>
    );

}

const mapStateToProps = state => ({
    favouritesRx: state.favourites.movies 
});

export default connect(mapStateToProps)(FavouritesList);