import Header from './components/Header'
import Hero from './components/Hero'
import Conditions from './components/Conditions'
import About from './components/About'
import Services from './components/Services'
import Footer from './components/Footer'
import './index.css'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Conditions />
        <About />
        <Services />
      </main>
      <Footer />
    </div>
  )
}

export default App
