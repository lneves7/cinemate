import React from 'react';
import { Button, Col, Icon, Row } from 'react-materialize';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledHistoryItem = styled(Row)`
    border-bottom: 1px solid #dcdcdc;
    padding-bottom: 10px;
    margin-bottom: 10px;
`;

const HistoryList = props => {

    return (
        //? Reverte os itens para a ultima pesquisa realizada aparecer por primeiro, como uma pilha
        props.items.reverse().map((i, index) => 
            <StyledHistoryItem key={`history-item-${index}`}> 
                <Col l={1} m={2} s={3}>
                    <Button className="teal" 
                        floating 
                        onClick={() => props.remakeSearchCallback(i)}
                        tooltip="Refazer pesquisa"
                        icon={<Icon className="mr0 ml0">history</Icon>}
                        waves="light"
                    />
                </Col>
                <Col l={11} m={10} s={9}>
                    <span className="grey-text text-darken-3 s16 f600">
                        - "{i.query}"
                    </span>
                    <div>
                        <span className="teal-text text-darken-4 s14">
                            {i.totalResults} resultados encontrados
                        </span>
                    </div>
                </Col>
            </StyledHistoryItem>
        )
    )

}

HistoryList.propTypes = {
    items : PropTypes.array.isRequired,
    remakeSearchCallback: PropTypes.func.isRequired
}

export default HistoryList;