import Home from './pages/Welcome';
import About from './pages/About';
import Services from './pages/Services';
import FoodMenu from './pages/FoodMenu';
import Chefs from './pages/Chefs';
import Reservation from './pages/Reservation';
import Reviews from './pages/Reviews';
import Footer from './pages/Footer';
import { useRef } from 'react'
import './App.css'
import Arrow from './pages/Arrow';
import Navbar from './pages/Navbar';


function App() {
  const homeRef=useRef(null)
  const aboutRef=useRef(null)
  const servicesRef=useRef(null)
  const foodmenuRef=useRef(null)
  const reservationRef=useRef(null)
  const chefsRef=useRef(null)
  const reviewsRef=useRef(null)
  const footerRef=useRef(null)

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Navbar onReservation={()=>scrollTo(reservationRef)} onAbout={()=>scrollTo(aboutRef)} onHome={()=>scrollTo(homeRef)} onServices={()=>scrollTo(servicesRef)} onFoodMenu={()=>scrollTo(foodmenuRef)} onChefs={()=>scrollTo(chefsRef)} onFooter={()=>scrollTo(footerRef)} onReviews={()=>scrollTo(reviewsRef)}/>

      <section ref={homeRef}>
        <Home onNext={()=>scrollTo(aboutRef)} onReservation={()=>scrollTo(reservationRef)}/>
      </section>

      <section ref={aboutRef}>
        <About onNext={()=>scrollTo(servicesRef)} onReservation={()=>scrollTo(reservationRef)} />
      </section>

      <section ref={servicesRef}>
        <Services onNext={()=>scrollTo(foodmenuRef)} />
      </section>

      <section ref={foodmenuRef}>
        <FoodMenu onNext={()=>scrollTo(reservationRef)}/>
      </section>

      <section ref={reservationRef}>
        <Reservation onNext={()=>scrollTo(chefsRef)}/>
      </section>

      <section ref={chefsRef}>
        <Chefs onNext={()=>scrollTo(reviewsRef)}/>
      </section>

      <section ref={reviewsRef}>
        <Reviews onNext={()=>scrollTo(footerRef)}/>
      </section>

      <section ref={footerRef}>
        <Footer onNext={()=>scrollTo(homeRef)}/>
      </section>

      <Arrow onClick={()=>scrollTo(homeRef)}/>
    </div>
  )
}

export default App
