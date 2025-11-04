import { useState } from 'react'
import './App.css'
import Todopage from './pages/todopage'
import { ToastContainer } from 'react-toastify'
import { Route, Routes } from 'react-router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Todopage/>}/>
      </Routes>
      <ToastContainer />

    </>
  )
}

export default App
