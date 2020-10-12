import React from 'react';
import {Store} from '../../store';
import PropTypes from 'prop-types';
import { Button, Col, Icon, Row } from 'react-materialize';
import { changeSearchResults } from '../../store/reducers/ducks/search';

const SearchResultsHeader = props => {

    return (
        <Row>
            <Col m={10} s={12}>
                <h5 className="teal-text teal-darken-4">
                    <Icon> movie </Icon>
                    {props.searchRx.results.totalResults} resultados encontrados para "{props.searchRx.results.query}"
                </h5>
            </Col>
            <Col m={2} s={12} className="right-align">
                <Button flat
                    onClick={() => Store.dispatch(changeSearchResults(false))}
                    className="indigo-text" 
                    icon={ <Icon className="s16"> clear </Icon> } >
                    Limpar
                </Button>
            </Col>
        </Row>
    );

}

SearchResultsHeader.propTypes = {
    searchRx: PropTypes.object
}

export default SearchResultsHeader;