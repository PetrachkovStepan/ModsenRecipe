import './App.css'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Outlet } from './pages/Outlet'

function App() {

  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
