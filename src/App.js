import './App.css';
import App1 from './App1';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setName('');
    console.log(`Form submitted ${name}`);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <div className="Field">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              placeholder="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <button disabled={!name} type="submit">
            Submit
          </button>
        </fieldset>
      </form>
      <App1 />
    </div>
  );
}

export default App;
