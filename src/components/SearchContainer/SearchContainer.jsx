import React from 'react';
import { Col, Container, Row } from 'react-materialize';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Background from '../Background/Background';
import Search from './Search';
import SearchResults from './SearchResults';

const SearchResultsContainer = styled(Col)`
    background-color: #FFF;
    box-shadow: 0px 0px 6px #0000007d;
    padding: 1.1em !important;
`;


const SearchContainer = (props) => {

    return (
        <Background className="animate__animated animate__fadeIn">
            <Container>
                <Row>
                    <Col s={12}>
                        <Search />
                    </Col>
                </Row>
            </Container>
            {props.searchRx.results && 
                <Row>
                    <SearchResultsContainer s={12} className="animate__animated animate__fadeIn">
                        <SearchResults results={props.searchRx.results.Search}/>
                    </SearchResultsContainer>                    
                </Row>
            }
            <Row></Row>
        </Background>
    )

}

const mapStateToProps = state => ({
    searchRx: state.search
})

export default connect(mapStateToProps)(SearchContainer);