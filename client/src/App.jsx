import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import HOmepage from './Components/HOmepage';
import Search from './Components/Search';
import Login from './Components/Login';

function App() {
  const location = useLocation();
  const noHeaderPaths = ['/account'];

  const shouldShowHeader = !noHeaderPaths.includes(location.pathname.toLowerCase());

  return (
    <>
      {shouldShowHeader && <Header />}
      <Routes>
        <Route path="/" element={<HOmepage />} />
        <Route path="/search" element={<Search />} />
        <Route path="/account" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
