import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import Category from './pages/Category'
import Home from './pages/Home'
import Product from './pages/Product'

export function App() {
  return (
    <BrowserRouter>
      <header className="flex-none bg-indigo-50">
        <NavBar/>
      </header>
      <div className='flex-1 overflow-y-auto bg-indigo-50'>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/products/:productId" element={<Product />}/>
          <Route exact path="/categories/:categoryId" element={<Category/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}
