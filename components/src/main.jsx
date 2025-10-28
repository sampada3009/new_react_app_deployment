import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Header from './Header.jsx'
import Hero from './Hero.jsx'
import CategoryBar from './CategoryBar.jsx'
import Footer from './Footer.jsx'
import Sampada from './Sampada.jsx'
import Component1 from './Component1.jsx'
import Component2 from './Component2.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Header />
      <Hero />
      <CategoryBar />
      <Footer />
      {/* <Sampada /> */}
      {/* <Component1 /> */}
      {/* <Component2 /> */}
  </StrictMode>
)
