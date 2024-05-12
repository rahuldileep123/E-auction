
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Dashboard from './pages/Dashboard'
import BidScreen from './pages/BidScreen'
import AllProducts from './pages/AllProducts'
import Footer from './components/Footer'


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/allproducts' element={<AllProducts/>}/>
        <Route path='/register' element={<Auth insideRegister/>}/>
        <Route path='/login' element={<Auth/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/view/:pid' element={<BidScreen/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
