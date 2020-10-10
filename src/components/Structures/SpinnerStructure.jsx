import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Preloader } from 'react-materialize';

const SpinnerContainer = styled.div`
    padding: 10px;
    ${props => props.labelInline && 'display: inline'}
`;

const SpinnerLabelContainer = styled.div`
    padding: 10px;
    color: #3f906e;
    font-size: 15px;
    font-weight: 700;
    ${props => props.labelInline && 'display: inline; margin-left : 10px'}
`;

const SpinnerStructure = props => {

    return (
        <div>
            <SpinnerContainer labelInline={props.labelInline}>
                <Preloader 
                    color="green"
                    size={props.size}
                    active={props.active}
                />
            </SpinnerContainer>
            {props.label && 
                <SpinnerLabelContainer labelInline={props.labelInline}>
                    {props.label}
                </SpinnerLabelContainer>
            }
        </div>
    )

}

SpinnerStructure.propTypes = {
    size: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    labelInline: PropTypes.bool
}

export default SpinnerStructure;