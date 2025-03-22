import { Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcome.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import AccountSettings from './components/AccountSettings.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/account" element={<AccountSettings />} />
      </Routes>
    </div>
  );
}

export default App;