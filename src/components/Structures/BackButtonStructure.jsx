import React from 'react';
import PropTypes from 'prop-types';
import { setViewMode } from '../../store/reducers/ducks/viewMode';
import { Store } from '../../store';
import { connect } from 'react-redux';
import { Button, Col, Icon, Row } from 'react-materialize';

const BackButtonStructure = props => {

    const backButton = (
        <Button flat
            onClick={() => Store.dispatch(setViewMode(props.viewModeRx.prev))}
            className="teal-text text-darken-3"
            icon={ <Icon className="s20">arrow_back_ios</Icon> }>
            Voltar
        </Button>
    );

    return (
        props.renderRow ? (
            <Row className="mb0">
                <Col s={12} m={12} l={12}>
                    {backButton}
                </Col>
            </Row>
        )  : (
            {backButton}
        )
    )

}

BackButtonStructure.propTypes = {
    renderRow: PropTypes.bool
}


const mapStateToProps = state => ({
    viewModeRx: state.viewMode
})

export default connect(mapStateToProps)(BackButtonStructure);