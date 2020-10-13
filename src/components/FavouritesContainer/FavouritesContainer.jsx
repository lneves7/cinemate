import React from 'react';
import { Col, Row } from 'react-materialize';
import styled from 'styled-components';
import Background from '../Background/Background';
import BackButtonStructure from '../Structures/BackButtonStructure';
import FavouritesList from './FavouritesList';

const StyledFavouritesContainer = styled(Col)`
    background-color: #FFF;
    box-shadow: 0px 0px 6px #0000007d;
    padding: 1.3em !important;
    margin-top: 2rem;
`;

const FavouritesContainer = props => {

    return (
        <Background className="animate__animated animate__fadeIn">
            <Row>
                <StyledFavouritesContainer s={12}>
                    <BackButtonStructure renderRow />
                    <FavouritesList />
                </StyledFavouritesContainer>
            </Row>
        </Background>
    );
}

export default FavouritesContainer;