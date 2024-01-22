import { Routes, Route } from 'react-router-dom'
import './App.css'

import Header from '../components/Header'
import Home from '../components/Home'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
    </div>
  )
}

export default App
