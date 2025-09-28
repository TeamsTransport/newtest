import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown dropdown-hover">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16"/>
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link to="/">Item 1</Link></li>
              <li className="dropdown dropdown-hover dropdown-right">
                <a className="font-semibold">Parent</a>
                <ul className="dropdown-content menu menu-sm shadow bg-base-100 rounded-box w-52 z-20">
                  <li><Link to="/submenu1">Submenu 1</Link></li>
                  <li><Link to="/submenu2">Submenu 2</Link></li>
                </ul>
              </li>
              <li><Link to="/about">Item 3</Link></li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl">daisyUI</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><Link to="/">Item 1</Link></li>
            <li className="relative group">
              <Link to="#" className="btn btn-ghost">Parent</Link>
              <ul tabIndex={0} className="absolute hidden group-hover:flex flex-col bg-base-100 shadow rounded-box mt-2 p-2 z-10">
                <li><Link to="/submenu1">Submenu 1</Link></li>
                <li><Link to="/submenu2">Submenu 2</Link></li>
              </ul>
            </li>
            <li><Link to="/about">Item 3</Link></li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/submenu1" element={<Submenu1 />} /> */}
        {/* <Route path="/submenu2" element={<Submenu2 />} /> */}
      </Routes>
    </div>
  );
}

export default App;
