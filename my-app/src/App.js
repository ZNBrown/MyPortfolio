import logo from './logo.svg';
import './App.css';
import { Header, Footer } from './layout';
import { Switch, Route } from 'react-router-dom';
import * as Pages from './pages';



function App() {
  return (
    <>
    <Header />
    <Switch>

    <Route exact path="/">
          <Pages.About />
    </Route>
    <Route path="/about">
          <Pages.About />
    </Route>

    <Route>
          <h1>Oops, that path doesn't exist</h1>
        </Route>
    </Switch>
    <Footer />
    </>
  );
}

export default App;
