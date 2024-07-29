
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import HOmepage from './Components/HOmepage'

function App() {


  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path={"/"} element={<HOmepage />} />
        </Routes>
      </Router>
      {/* <Home/> */}
    </>
  )
}

export default App
