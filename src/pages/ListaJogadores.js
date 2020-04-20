import React, { Component } from 'react';
import api from './../services/index';

export default class ListaJogadores extends Component {

    constructor(props) {
        super(props);

        this.state = {
            jogadores: []
        }
    }

    componentWillMount() {
        api.get('/players').then((response) => {
            this.setState({
                jogadores: response.data
            })
        })
    }

    render() {
        return (
            <table className="table table-dark table-striped table-bordered table-hover mt-5">
                <thead>
                    <tr>
                    <th scope="col" className="bg-danger">id</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Country</th>
                    <th scope="col">Team</th>
                    <th scope="col">Cidade</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.jogadores.map((jogador, index) => (
                            <tr key={index}>
                                <th scope="row">{jogador.id}</th>
                                <td>{jogador.name}</td>
                                <td>{jogador.country}</td>
                                <td>{jogador.team_name}</td>
                                <td>{jogador.team_city}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        );
    }
}