import './App.css';
import App1 from './App1';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(`Form submitted ${name}`);
    // setName('');
  };

  console.log(name);

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
      <App1 name={name} />
    </div>
  );
}

export default App;
