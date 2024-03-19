import Form from './components/Form';
import Profile from './components/Profile';
import { LoginContext } from './context/LoginContext';
import './App.css';
import { createContext, useState } from 'react';
// simple switch package
import ReactSwitch from 'react-switch';
import Test from './components/test';

export const ThemeContext = createContext(null);

// id value (light or dark) sets the light mode in the UI, requires toggling
function App() {
  const [theme, setTheme] = useState('light');
  const [username, setUsername] = useState('');
  const [showProfile, setShowProfile] = useState(false);

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <LoginContext.Provider
          value={{ username, setUsername, setShowProfile }}>
          {showProfile ? <Profile /> : <Form />}
        </LoginContext.Provider>
        <Test />
        <div className="switch">
          <label>{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</label>
          <ReactSwitch onChange={toggleTheme} checked={theme === 'dark'} />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
