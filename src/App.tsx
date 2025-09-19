import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <div className="p-4 bg-base-100">
      <div className="navbar bg-base-200 rounded-box">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl">My App</Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li><Link to="/">Home</Link></li>
            <li tabIndex={0}>
              <a className="justify-between">
                Parent
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z"/></svg>
              </a>
              <ul className="p-2 bg-base-100 rounded-box z-10">
                <li><Link to="/submenu1">Submenu 1</Link></li>
                <li><Link to="/submenu2">Submenu 2</Link></li>
              </ul>
            </li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Add these if you have components for submenu pages */}
        {/* <Route path="/submenu1" element={<Submenu1 />} />
        <Route path="/submenu2" element={<Submenu2 />} /> */}
      </Routes>
    </div>
  );
}

export default App;
