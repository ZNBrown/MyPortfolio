import React from "react";
import { NavBar } from './components/layouts';
import * as Pages from './pages';

import { Switch, Route } from 'react-router-dom';

const App = () => {
    return (
        <>
            <NavBar />
            <Switch>

                <Route exact path='/'>
                    <Pages.Home />
                </Route>

                <Route path='/projects'>
                    <Pages.Projects />
                </Route>

                <Route >
                    <h1>Nothing here!</h1>
                </Route>

            </Switch>





        </>
    )
}

export default App