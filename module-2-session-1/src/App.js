import './App.css';
import data from './single-sample';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="playlist">
          <h1>Playlist</h1>
          <img src={data['album']['images'][0]['url']}/>
          <table>
            <tr>
              <th>Title</th>
              <th>Artist</th>
              <th>Album</th>
              <th>Action</th>
            </tr>
            <tr>
              <td>{data['album']['name']}</td>
              <td>{data['album']['artists'][0]['name']}</td>
              <td>{data['name']}</td>
              <td><button>Play</button></td>
            </tr>
          </table>
        </div>
      </header>
    </div>
  );
}

export default App;
