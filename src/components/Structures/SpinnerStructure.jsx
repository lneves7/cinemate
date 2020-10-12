import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Preloader, Modal } from 'react-materialize';

const SpinnerContainer = styled.div`
    ${props => props.modal && 'padding: 10px; '}
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

    const spinner = (
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

    return (
        props.modal ? (
            <Modal
                className="preloader-modal"
                open={true}
                actions={null}
                options={{
                    dismissible: false,
                    inDuration: 250,
                    outDuration: 250,
                    opacity: 0.5,
                    preventScrolling: false,
                    startingTop: '35%',
                    endingTop: '40%'
                }}
                root={props.modalRoot && props.modalRoot.current}>
                {spinner}
            </Modal>
        ) : (
            spinner
        )
    )

}

SpinnerStructure.propTypes = {
    modal: PropTypes.bool,
    size: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    labelInline: PropTypes.bool
}

export default SpinnerStructure;