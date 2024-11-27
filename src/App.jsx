import { useState } from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import { Toaster } from 'react-hot-toast'
import Home from './pages/Home/Home'
import Product from './pages/Product/Product'
import { AuthProvider } from './components/Context/AuthContext'
import Checkout from './pages/Checkout/Checkout'
import Payment from "./pages/Payment/Payment"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AuthProvider>
    <BrowserRouter future={{v7_startTransition:true,v7_relativeSplatPath:true}}>
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/checkout/:id' element={<Checkout/>} />
      <Route path='/payment/:id' element={<Payment/>} />
    </Routes>
    </BrowserRouter>
    <Toaster/>
    </AuthProvider>
    </>
  )
}

export default App
