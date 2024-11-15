import logo from './logo.svg';
import './App.css';
import GithubProfileSearch from './components/GithubProfileSearch';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-info bg-secondary text-white">
        <div className="container-fluid justify-content-center">
          <span className="navbar-brand mb-0 h1 font-bold">React Github Profile search with Functional Component</span>
        </div>
      </nav>

      <div>
        <GithubProfileSearch/>
      </div>
    </div>
  );
}

export default App;
