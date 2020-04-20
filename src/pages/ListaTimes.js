import React, { Component } from 'react';
import api from './../services/index';

export default class ListaTimes extends Component {

    constructor(props) {
        super(props);

        this.state = {
            times: []
        }
    }

    componentWillMount() {
        api.get('/teams').then((response) => {
            this.setState({
                times: response.data
            })
        });
    }    
    
    render() {
        return(
            <table className="table table-dark table-striped table-bordered table-hover mt-5">
                <thead>
                    <tr>
                    <th scope="col" className="bg-success">id</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Cidade</th>
                    <th scope="col">Pais</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.times.map((time, index) => (
                            <tr key={index}>
                                <th scope="row">{time.id}</th>
                                <td>{time.team_name}</td>
                                <td>{time.team_city}</td>
                                <td>{time.team_country}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        );
    }
}