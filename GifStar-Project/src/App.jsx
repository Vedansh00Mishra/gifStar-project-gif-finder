
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Gifs from './Gif'
import RandomGif from './RandomGifs'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  

  return (
    <>
    <Router>
 
    <Routes> {/* Replace Switch with Routes */}
          <Route path="/" element={<Gifs />} />
          <Route path="/random" element={<RandomGif />} />
        </Routes>
       
    </Router>
    </>
  );
}

export default App;
