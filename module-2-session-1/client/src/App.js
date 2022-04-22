import Login from "./pages/login/index";
import Home from "./pages/home/index";
import "bootstrap/dist/css/bootstrap.min.css";

const code = new URLSearchParams(window.location.search).get('code')

function App() {
  return code ? <Home code = { code } /> : <Login />;
}

export default App;