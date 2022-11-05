import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>hello world</h1>
        <form>
          <h2>exploit url path</h2>
          <input className='exploit_url_path' name='exploit_url_path' />
          <h2>exploit headers</h2>
          <input className='' name='exploit_headers' />
          <h2>exploit body</h2>
          <input className='' name='exploit_body' />
          <button type='submit'>submit</button>

        </form>
      </header>
    </div>
  );
}

export default App;
