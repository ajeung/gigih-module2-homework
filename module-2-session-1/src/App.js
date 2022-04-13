import './App.css';
import data from './data/song';
import Playlist from './components/playlist';
import Home from './pages/home';

function App() {
  return (
      <div className="App">
        <header>
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
