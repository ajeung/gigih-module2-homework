import './App.css';
import data from './data/song';
import Playlist from './components/playlist';
import Home from './pages/home';
// import CreatePlaylist from './components/create-playlist';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { Redirect } from 'react-router-dom';


function App() {
  // const isLogin = true;
  return (
    // <Router>
    //   <Switch>
    //     <Route path="/private">
    //       {isLogin ? (
    //         <CreatePlaylist />
    //       ) : (
    //         <Redirect to="/" />
    //       )}
    //     </Route>
    //     <Route path="/">
    //       <div>You are in root URL</div>
    //     </Route>
    //   </Switch>
    // </Router>
      <div className="App">
        <header className="App-header">
            <Home>
              {data.map(feed => (
                <Playlist {...feed} />
              ))}
            </Home> 
        </header>
      </div>
  );
}

export default App;
