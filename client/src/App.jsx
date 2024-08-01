import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import HOmepage from './Components/HOmepage';
import Search from './Components/Search';
import Login from './Components/Login';
import Signup from './Components/Signup';

function App() {
  const location = useLocation();
  const noHeaderPaths = ['/login','/signup'];

  const shouldShowHeader = !noHeaderPaths.includes(location.pathname.toLowerCase());

  return (
    <>
      {shouldShowHeader && <Header />}
      <Routes>
        <Route path="/" element={<HOmepage />} />
        <Route path="/search" element={<Search />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
