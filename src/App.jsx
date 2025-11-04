
import './App.css'
import { ToastContainer } from 'react-toastify'
import { Route, Routes } from 'react-router'
import Todopage from './pages/todopage'


function App() {


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
