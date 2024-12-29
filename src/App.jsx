import './App.css'
import AboutUs from './components/AboutUs/AboutUs'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <>
    <Navbar />
    <Home />
    <AboutUs />

      <div>
      
        <h1 className="text-5xl font-bold underline">
          Hello world!
        </h1>
      </div>
    </>
  )
}

export default App
