import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Box } from '@mui/material'
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'
import Home from './pages/Home'
import Details from './pages/Details'

// import Details from './pages/Details'

function App() {

  return (
    <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<Details />} />
      </Routes>
    <Footer />
  </Box>
  )
}

export default App
