
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Home from './Components/Home'

function App() {
  

  return (
    <>
    <Router>
    <Header/>
      <Routes>
        <Route path={"/"} element={<Home/>} />
      </Routes>
    </Router>
    {/* <Home/> */}
    </>
  )
}

export default App
