
import './App.css'
import About from './pages/About'
import Chefs from './pages/Chefs'
import FoodMenu from './pages/FoodMenu'
import Footer from './pages/Footer'
import Reservation from './pages/Reservation'
import Reviews from './pages/Reviews'
import Services from './pages/Services'
import Welcome from './pages/welcome'

function App() {

  return (
    <>
      <Welcome/>
      <About/>
      <Services/>
      <FoodMenu/>
      <Reservation/>
      <Chefs/>
      <Reviews/>
      <Footer/>
    </>
  )
}

export default App
