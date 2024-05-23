import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './layout/Layout'
import Home from './pages/home/Home'
import Add from './pages/add/Add'
import Detail from './pages/detail/Detail'
import Basket from './pages/basket/Basket'
import Wishlist from './pages/wishlist/Wishlist'
import BasketProvider from './context/BasketProvider';
import "./App.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <BasketProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="add" element={<Add />} />
          <Route path="detail/:id" element={<Detail />} />
          <Route path="basket" element={<Basket />} />
          <Route path="wishlist" element={<Wishlist />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </BasketProvider>
   
    </>
  )
}

export default App
