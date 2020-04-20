import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Player extends Component {

    render() {
        return (
            <div className="row mt-5">
                <div className="col-6">
                    <div className="card bg-dark text-light">
                        <img className="card-img-top" src="/imgs/time.jpg" alt="brand"/>
                        <div className="card-body">
                            <Link className="btn btn-danger btn-block btn-lg" to="/jogadores">Jogadores</Link>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <img className="card-img-top" src="/imgs/br01.jpg" alt="country"/>
                    <div className="card bg-warning">
                        <div className="card-body">
                            <Link className="btn btn-success btn-block btn-lg" to="/teams">Times</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}