import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';

function App() {
  return (
    <Router>
      <div className="bg-brand-navy min-h-screen text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
