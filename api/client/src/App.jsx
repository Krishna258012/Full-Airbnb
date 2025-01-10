import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import HOmepage from './Components/HOmepage';
import Search from './Components/Search';
import Login from './Components/Login';
import Signup from './Components/Signup';
import { Toaster } from "react-hot-toast"
import axios from 'axios';
import Rooms from './Components/Rooms';

axios.defaults.baseURL = "http://localhost:5000/";

function App() {

  const location = useLocation();
  const noHeaderPaths = ['/login', '/signup'];
  const shouldShowHeader = !noHeaderPaths.includes(location.pathname.toLowerCase());


  return (
    <>
      <Toaster />
      {shouldShowHeader && <Header />}
      <Routes>
        <Route path="/" element={<HOmepage />} />
        <Route path="/room/:id" element={<Rooms />} />
        <Route path="/search" element={<Search />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
