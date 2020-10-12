import React, { useState } from 'react';
import { Button, Col, Icon, Row, TextInput } from 'react-materialize';
import { connect } from 'react-redux';
import styled from 'styled-components';
import MovieApi from '../../api/MovieApi';
import { Store } from '../../store';
import { changeSearchResults } from '../../store/reducers/ducks/search';
import SpinnerStructure from '../Structures/SpinnerStructure';
import M from 'materialize-css';

const SearchCard = styled.div`
    ${props => props.hasResults ? 'margin-top: 2vh;' : 'margin-top: 20vh;'}
    background-color: #FFF;
    border-radius: 10px;
    padding: 1.2rem;
    transition: margin 600ms ease-in;
`;

const StyledSearchInput = styled(TextInput)`
    font-size: 30px !important;
`

const MobileSearchLabel = styled.label`
    font-weight: 600;
    margin-left: 5px;
`;


const Search = (props) => {

    //? Termo a pesquisar
    const [query, setQuery] = useState('');
    //? Flag para determinar erro na hora de pesquisar
    const [invalid, setInvalid] = useState(false);
    //? Flag para spinner de loading
    const [loading, setLoading] = useState(false);

    const doSearch = () => {
        if(!query || !query.length){
            setInvalid(true);
            return;
        }
        setLoading(true);
        MovieApi().fetchMovies(query)
            .then(response => {
                if(response.data.Response !== "False"){
                    response.data.query = query;
                    Store.dispatch(changeSearchResults(response.data));
                } else {
                    M.toast({
                        html: 'Opa! Parece que não encontramos nenhum resultado para a sua busca!',
                    });
                    Store.dispatch(changeSearchResults(false));
                }
            })
            .catch((error) => {
                M.toast({
                    html: 'Opa! Ocorreu um erro inesperado...'
                });
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            })
    }

    const handleQueryChange = e => {
        if(invalid)
            setInvalid(false);
        setQuery(e.target.value);
    }

    return (
        <SearchCard className="z-depth-2 animate__animated animate__fadeIn" hasResults={!!props.searchRx}>
            <Row>
                <Col s={12} className="hide-on-small-only">
                    <StyledSearchInput 
                        value={query}
                        onKeyDown={(e) => e.keyCode === 13 && doSearch()}
                        onChange={handleQueryChange}
                        validate
                        className={invalid && 'invalid'}
                        error="Opa! Preencha o campo aqui em cima...."
                        icon="search"
                        label={"Digite aqui o título do seu filme favorito..."}
                        s={12}/>
                </Col>
                <Col s={12} className="hide-on-med-and-up">
                    <Icon className="darktxt s20">search</Icon>
                    <MobileSearchLabel 
                        className="darktxt s18" 
                        htmlFor="s-input-sm">
                            Digite aqui o título do seu filme favorito...
                    </MobileSearchLabel>
                    <StyledSearchInput 
                        id="s-input-sm"
                        value={query}
                        onKeyDown={(e) => e.keyCode === 13 && doSearch()}
                        onChange={handleQueryChange}
                        validate
                        className={invalid && 'invalid'}
                        error="Opa! Preencha o campo aqui em cima...."
                        s={12}/>
                </Col>
                {loading ? (
                    <Col s={12} className="center-align">
                        <SpinnerStructure size="small" active label="Pesquisando, aguarde..." labelInline/>
                    </Col>
                ) : (
                    <Col s={12} className="center-align">
                        <Button large waves="light" className="s-cinemate" onClick={doSearch}>
                            Pesquisar
                        </Button>
                    </Col>
                )}
                
            </Row>
        </SearchCard>
    )
}

const mapStateToProps = state => ({
    searchRx: state.search.results
})

export default connect(mapStateToProps)(Search);