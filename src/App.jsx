
import './App.css'
import { ToastContainer } from 'react-toastify'
import { Route, Routes } from 'react-router'
import Pages from './pages/Pages'


function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Pages/>}/>
      </Routes>
      <ToastContainer />

    </>
  )
}

export default App
