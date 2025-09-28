import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  const [showSubmenu, setShowSubmenu] = useState(false);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">My App</h1>

      <nav className="space-x-4">
        <Link to="/" className="btn btn-link">Home</Link>

        <div className="inline-block relative">
          <button
            onClick={() => setShowSubmenu(!showSubmenu)}
            className="btn btn-link"
          >
            Parent
          </button>

          {showSubmenu && (
            <div className="absolute bg-white shadow rounded mt-2 p-2 space-y-2">
              <Link to="/submenu1" className="block">Submenu 1</Link>
              <Link to="/submenu2" className="block">Submenu 2</Link>
            </div>
          )}
        </div>

        <Link to="/about" className="btn btn-link">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Add submenu routes if needed */}
        {/* <Route path="/submenu1" element={<Submenu1 />} /> */}
        {/* <Route path="/submenu2" element={<Submenu2 />} /> */}
      </Routes>
    </div>
  );
}

export default App;
