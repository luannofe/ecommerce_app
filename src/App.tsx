import MainPage from './components/MainPage'
import {Route, Routes} from 'react-router-dom'
import Produtos from './components/Produtos'
import NavBar from './components/NavBar'
import ShoppingCart from './components/ShoppingCart'
import { inUserDB } from '../server/interfaces'
import { createContext, useEffect, useState } from 'react'



export const userData = createContext<inUserDB | undefined>(undefined)

function App() {

  const [userDataValues, setUserDataValues] = useState<inUserDB | undefined>()

  useEffect(()=> {
    loadUserData()
  }, [])

  return (
    <userData.Provider value={userDataValues}>
      <NavBar/>
      <Routes>
        <Route path='/' element={<MainPage/>} />
        <Route path='/produtos' element={<Produtos/>} />
        <Route path='/carrinho' element={<ShoppingCart/>} />
      </Routes>
    </userData.Provider>
  )

  async function loadUserData() {
    
    await fetch('http://localhost:3000/api/user', {
        method: 'GET'
    })
    .then( res => res.json())
    .then( data => {
        setUserDataValues(data)
        //should check first if user has cart locally
        //if not:
        updateUserCart(data[0].cart)
        /*if has:
        THEN IT SHOULD UPLOAD DATA EVERYTIME USER UPDATES CAR */
        
    })

    function updateUserCart(itemsArray: inUserDB['cart']) {
      let i = 0
      let items : any[] = []
      for (let item of itemsArray) {

        i++
        items = [...items, {productID: item.productID, productQuantity: item.productQuantity}]
        

        if (i >= (itemsArray.length - 1)) {
          localStorage.setItem(`shoppingCart`, JSON.stringify(items))
        }
      }
    }

  }
}

export default App
