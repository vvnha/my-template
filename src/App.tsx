import React from 'react';
import logo from './logo.svg';
import './App.css';
import TextInput from './shared-components/TextInput';
import PasswordField from './shared-components/PasswordInput';
import Profile from './shared-components/Profile';
import Card from './shared-components/Card';

function App() {
  return (
    <div className="App">
      <Card />
      {/* <Profile /> */}
    </div>
  );
}

export default App;
