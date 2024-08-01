
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import HOmepage from './Components/HOmepage'
import Search from './Components/Search'

function App() {


  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HOmepage />} />
          <Route path={"/search"} element={<Search />} />
        </Routes>
      </Router>

      {/* <Home/> */}
    </>
  )
}

export default App
