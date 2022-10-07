import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './Home/Home';
import Layout from './Page/Layout';
import Form from './Form/Form';
import { UserProvider } from './state/UserContext';

export default function App() {
  return (
    <Router>
      <UserProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="form" element={<Form />} />
          </Route>
        </Routes>
      </UserProvider>
    </Router>
  );
}
