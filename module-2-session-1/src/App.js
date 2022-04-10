import './App.css';
import CreatePlaylist from './components/create-playlist';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Redirect } from 'react-router-dom';

function App() {
  const isLogin = true;
  return (
    <Router>
      <Switch>
        <Route path="/private">
          {isLogin ? (
            <CreatePlaylist />
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
