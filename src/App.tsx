import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import About from './pages/About';
import Home from './pages/Home';
import Store from './pages/Store';

import Layout from './components/Layout';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Container className='mb-4'>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='store' element={<Store />} />
            <Route path='about' element={<About />} />
          </Route>
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
