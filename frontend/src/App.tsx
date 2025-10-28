import './App.css'
import Navbar from './components/Navbar'
import Education from './pages/Education'
import Experience from './pages/Experience'
import Home from './pages/Home'

function App() {

  return (
    <>
      <Navbar />
      <Home />
      <Experience />
      <Education />

      <h1 className='mt-[200px]'>TEST</h1>
    </>
  )
}

export default App
