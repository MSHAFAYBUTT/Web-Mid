import './App.css';
import SearchBar from './components/SearchBar';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from '/pages/Home.jsx'
import Movie from '/pages/Movie.jsx'
import Favpage from '/pages/Favpage.jsx'
function App() {
  return (
    <div className="App">
<Router>
      <nav>
        <Link to="/">Home</Link> 
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Movie" element={<Movie />} />
        <Route path="/Favpage" element={<Favpage />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
