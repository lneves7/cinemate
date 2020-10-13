import React from 'react';
import PropTypes from 'prop-types';
import { Col, Pagination, Row } from 'react-materialize';

const PaginationStructure = props => {

    return (
        <Row>
            <Col s={12} m={12} l={12} xl={12}
                className="pad1 center-align">
                <Pagination
                    activePage={props.activePage}
                    onSelect={props.selectCallback}
                    items={props.pageCount}
                    maxButtons={6}
                />
            </Col>
        </Row>
    )

}

PaginationStructure.propTypes = {
    activePage : PropTypes.number,
    selectCallback : PropTypes.func,
    pageCount: PropTypes.number
}

export default PaginationStructure;