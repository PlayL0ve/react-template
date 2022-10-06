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
import Layout from './Page/Layout';
import Form from './Form/Form';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="form" element={<Form />} />
          <Route path="games" element={<Games />} />
          <Route path="books" element={<Books />} >
            <Route path="born" element={<Born />} />
            <Route path="breathe" element={<Breathe />} />
            <Route path="baghavad" element={<Baghavad />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}
