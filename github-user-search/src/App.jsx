// Main app: holds search state, calls the API service, and render UI.
// Keeps logic simple and beginner-friendly.

import { useState } from 'react';
import SearchBar from './components/SearchBar';
import Results from './components/Results';
import { searchUsers } from './services/githubApi';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [users, setUsers] = useState([]);    // when searching for results
  const [loading, setLoading] = useState(false);   // loading indicator
  const [error, setError] = useState('');   // error feedback

  const handleSearch = async (term) => {
    setError('');
    setLoading(true);
    try {
      const items = await searchUsers(term);
      setUsers(items);
    } catch (err) {
      setError('Failed to fetch users. Try again later or check your network/token.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '24px' }}>
        <h1>Github User Search</h1>
        <SearchBar onSearch={handleSearch} />
        <Results users={users} loading={loading} error={error} />
      </div>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
