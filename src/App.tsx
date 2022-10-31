import MainPage from './components/MainPage'
import {Route, Routes} from 'react-router-dom'
import Produtos from './components/Produtos'
import NavBar from './components/NavBar'
import ShoppingCart from './components/ShoppingCart'

function App() {


  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<MainPage/>} />
        <Route path='/produtos' element={<Produtos/>} />
        <Route path='/carrinho' element={<ShoppingCart/>} />
      </Routes>
    </>
  )
}

export default App
