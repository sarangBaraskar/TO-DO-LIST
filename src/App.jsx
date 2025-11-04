
import './App.css'
import { ToastContainer } from 'react-toastify'
import { Route, Routes } from 'react-router'
import Todoform from './component/Todoform'

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Todoform/>}/>
      </Routes>
      <ToastContainer />

    </>
  )
}

export default App
