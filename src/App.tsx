import MainPage from './components/MainPage'
import {Route, Routes} from 'react-router-dom'
import Produtos from './components/Produtos'
import NavBar from './components/NavBar'

function App() {


  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<MainPage/>} />
        <Route path='/produtos' element={<Produtos/>} />
      </Routes>
    </>
  )
}

export default App
