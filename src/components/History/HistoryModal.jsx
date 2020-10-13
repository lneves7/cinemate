import React from 'react';
import { Button, Icon, Modal } from 'react-materialize';
import M from 'materialize-css';
import { connect } from 'react-redux';
import { Store } from '../../store';
import { changeSearchResults } from '../../store/reducers/ducks/search';
import MovieApi from '../../api/MovieApi';
import HistoryEmpty from './HistoryEmpty';
import HistoryList from './HistoryList';

const HistoryModal = props => {

    const remakeSearch = historyItem => {
        MovieApi().fetchMovies(historyItem.query)
        .then(response => {
            response.data.query = historyItem.query;
            Store.dispatch(changeSearchResults(response.data));
        })
        .catch((error) => {
            M.toast({ html: 'Opa! Ocorreu um erro inesperado...'});
            console.log(error);
        })
        close();
    }

    const close = () => {
        let elem = document.querySelector("#history-modal");
        let instance = M.Modal.getInstance(elem);
        instance.close();
    }

    return (
        <Modal 
            id="history-modal"
            trigger={props.children}
            header="Histórico de pesquisa"
            options={{ preventScrolling: false }}
            actions={[
                <Button flat modal="close" node="button" className="red-text" waves="green" icon={<Icon>clear</Icon>}>
                    Fechar
                </Button>
            ]}
            fixedFooter>
            {props.historyRx.length > 0 
                ? <HistoryList items={props.historyRx} remakeSearchCallback={remakeSearch}/>
                : <HistoryEmpty />
            }
        </Modal>
    )
}

const mapStateToProps = state => ({
    historyRx: state.history.data
});

export default connect(mapStateToProps)(HistoryModal);