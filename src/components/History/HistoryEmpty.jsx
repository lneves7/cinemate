import React from 'react';
import { Col, Row } from 'react-materialize';

const HistoryEmpty = () => {

    return (
        <Row>
            <Col s={12} className="center-align">
                <span className="grey-text text-darken-1 s15">
                    Vazio! Nenhuma pesquisa efetuada até o momento.
                </span>
            </Col>
        </Row>
    )

}

export default HistoryEmpty;