import {
  BrowserRouter as Router,
  Routes, 
  Route,
} from 'react-router-dom';
import Books from './Books/Books';
import Home from './Home/Home';
import Born from './Books/Born';
import Breathe from './Books/Breathe';
import Baghavad from './Books/Baghavad';
import Games from './Games/Games';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="games" element={<Games />} />
        <Route path="books" element={<Books />} >
          <Route path="born" element={<Born />} />
          <Route path="breathe" element={<Breathe />} />
          <Route path="baghavad" element={<Baghavad />} />
        </Route>
      </Routes>
    </Router>
  );
}
