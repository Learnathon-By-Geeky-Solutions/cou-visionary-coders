import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import profileIcon from '../assets/profile.png';
import dashboardIcon from '../assets/dashboard.png';
import logoutIcon from '../assets/logout.png';
import signupIcon from '../assets/signup.png';
import loginIcon from '../assets/login.png';
import { AuthContext } from '../Hooks/contextApi/UserContext';

function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Get AuthContext and ensure it's not null
  const authContext = useContext(AuthContext);

  // Check if authContext is available and extract user and logOut
  if (!authContext) {
    throw new Error('AuthContext is null');
  }

  const { user, isNewlyRegistered, logOut } = authContext;
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogout = async () => {
    await logOut();
  };

  return (
    <header className="md:fixed top-0 left-0 w-full md:z-50 flex flex-col sm:flex-row items-center justify-between drop-shadow-xl bg-gradient-to-r from-sky-800 to-pink-600 text-white sm:px-6 ">
      {/* Logo and Mobile Menu Toggle */}
      <div className="flex flex-row border-b-2 sm:border-none p-4 items-center justify-between w-full sm:w-auto">
        <img
          src={logo}
          alt="Halal Bondhon"
          className="h-14 w-auto object-contain mx-auto sm:mx-0"
        />
        <button
          className="block sm:hidden cursor-pointer"
          onClick={toggleMobileMenu}
          aria-label="Toggle Mobile Menu"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') toggleMobileMenu();
          }}
        >
          {isMobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Navigation Links */}
      <nav
        className={`${
          isMobileMenuOpen ? 'block' : 'hidden'
        } sm:flex sm:flex-row sm:items-center sm:gap-10`}
      >
        {user && !isNewlyRegistered ? (
          // If the user is logged in
          <ul className="flex flex-col sm:flex-row items-center justify-evenly sm:gap-10">
            <li className="bg-pink-700 px-2 py-1 m-1 rounded-md border-2 font-bold sm:m-0 grow hover:bg-pink-400">
              <Link to="/biodata">Biodata</Link>
            </li>
            <li className=" bg-pink-700 flex flex-row px-2 py-1 m-1 rounded-md border-2 font-bold sm:m-0 grow hover:bg-pink-400">
              <img src={profileIcon} alt="Profile" className="w-8 px-1" />
              <Link to="/profile">Profile</Link>
            </li>
            <li className=" bg-pink-700 flex flex-row px-2 py-1 m-1 rounded-md border-2 font-bold sm:m-0 grow hover:bg-pink-400">
              <img src={dashboardIcon} alt="Dashboard" className="w-8 px-1" />
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li className=" bg-pink-700 flex flex-row px-2 py-1 m-1 rounded-md border-2 cursor-pointer font-bold sm:m-0 grow hover:bg-pink-400">
              <img src={logoutIcon} alt="Logout" className="w-8 px-1" />
              <button onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        ) : (
          <ul className="flex flex-col sm:flex-row items-center justify-evenly sm:gap-10">
            <li className=" bg-pink-700 px-2 py-1 m-1 rounded-md border-2 font-bold sm:m-0 grow hover:bg-pink-400">
              <Link to="/home">Home</Link>
            </li>
            <li className=" bg-pink-700 px-2 py-1 m-1 rounded-md border-2 font-bold sm:m-0 grow hover:bg-pink-400">
              <Link to="/aboutus">About Us</Link>
            </li>
            <li className=" bg-pink-700 flex flex-row px-2 py-1 m-1 rounded-md border-2 font-bold sm:m-0 grow hover:bg-pink-400">
              <img src={signupIcon} alt="Sign Up" className="w-8 px-1" />
              <Link to="/signup">Sign Up</Link>
            </li>
            <li className=" bg-pink-700 flex flex-row px-2 py-1 m-1 rounded-md border-2 font-bold sm:m-0 grow hover:bg-pink-400">
              <img src={loginIcon} alt="Log In" className="w-8 px-1" />
              <Link to="/login">Log In</Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}

export default Nav;
