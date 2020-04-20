import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';

import Player from './pages/Players';
import ListaTimes from './pages/ListaTimes';
import ListaJogadores from './pages/ListaJogadores';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={ Player }/>
                <Route exact path="/jogadores" component={ ListaJogadores }/>
                <Route exact path="/teams" component={ ListaTimes }/>
            </Switch>
        </BrowserRouter>
    )
};

export default Routes;