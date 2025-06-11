import Home from './pages/Welcome';
import About from './pages/About';
import Services from './pages/Services';
import FoodMenu from './pages/FoodMenu';
import Chefs from './pages/Chefs';
import Reservation from './pages/Reservation';
import Reviews from './pages/Reviews';
import Footer from './pages/Footer';
import { useEffect, useRef, useState } from 'react'
import './App.css'
import Arrow from './pages/Arrow';
import Navbar from './pages/Navbar';


function App() {

  const[currentSection,setCurrentSection]=useState('');

  const homeRef=useRef(null)
  const aboutRef=useRef(null)
  const servicesRef=useRef(null)
  const foodmenuRef=useRef(null)
  const reservationRef=useRef(null)
  const chefsRef=useRef(null)
  const reviewsRef=useRef(null)
  const footerRef=useRef(null)

  const sectionRefs=[
    {ref:homeRef, id:'home'},
    {ref:aboutRef, id:'about'},
    {ref:servicesRef,id:'services'},
    {ref:foodmenuRef,id:'menu'},
    {ref:reservationRef,id:'reservation'},
    {ref:chefsRef,id:'chefs'},
    {ref:reviewsRef,id:'reviews'},
    {ref:footerRef,id:'footer'}
  ];


  const scrollTo = (ref,id) => {
    setCurrentSection(id);

    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(()=>{
    const observer=new IntersectionObserver((entries)=>{
      const visibleEntry=entries.find(entry=>entry.isIntersecting);
      if(visibleEntry){
        const id=visibleEntry.target.getAttribute('data-id');
        setCurrentSection(id);
      }
    },
    {threshold:0.6}
  );
    sectionRefs.forEach(({ref,id})=>{if(ref.current){
      ref.current.setAttribute('data-id',id);
      observer.observe(ref.current);
    }
    });
    return()=>observer.disconnect();
  },[]);

  return (
    <div>
      <Navbar 
        current={currentSection}
        onReservation={()=>scrollTo(reservationRef,'reservation')} 
        onAbout={()=>scrollTo(aboutRef,'about')} 
        onHome={()=>scrollTo(homeRef,'home')} 
        onServices={()=>scrollTo(servicesRef,'services')} 
        onFoodMenu={()=>scrollTo(foodmenuRef,'menu')} 
        onChefs={()=>scrollTo(chefsRef,'chefs')} 
        onFooter={()=>scrollTo(footerRef,'footer')} 
        onReviews={()=>scrollTo(reviewsRef,'reviews')}
      />

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
