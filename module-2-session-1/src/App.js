import './App.css';
import createPlaylist from './components/create-playlist';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Redirect } from 'react-router-dom';

function App() {
  const isLogin = true;
  return (
    <Router>
      <Switch>
        <Route path="/private">
          {isLogin ? (
            <createPlaylist />
          ) : (
            <Redirect to="/" />
          )}
        </Route>
        <Route path="/">
          <div>You are in root URL</div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
