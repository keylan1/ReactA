import Form from './components/Form';
import './App.css';
import { createContext, useState } from 'react';
// simple switch package
import ReactSwitch from 'react-switch';

export const ThemeContext = createContext(null);

// id value (light or dark) sets the light mode in the UI, requires toggling
function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <Form />
        <div className="switch">
          <label>{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</label>
          <ReactSwitch onChange={toggleTheme} checked={theme === 'dark'} />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
