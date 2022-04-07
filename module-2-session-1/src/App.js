import './App.css';
import Record from './pages/home/index.js';
import createPlaylist from './components/create-playlist';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <createPlaylist />
      </header>
    </div>
  );
}

export default App;
