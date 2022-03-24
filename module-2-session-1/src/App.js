import './App.css';
import Playlist from './components/playlist/index.js';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Playlist />
      </header>
    </div>
  );
}

export default App;