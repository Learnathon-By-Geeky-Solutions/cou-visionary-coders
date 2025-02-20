import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./shared/Footer/Footer";
import SignUp from "./pages/signup/pages";
import Home from "./pages/Home/pages";
import { Toaster } from 'react-hot-toast';
import Login from "./pages/login/pages";
import AboutUs from "./components/AboutUs";
import UserProfile from "./components/UserProfile";
import AuthProvider from "./Hooks/contextApi/UserContext";

function NoMatch() {
  return "Pages Not Found";
}

export default function App() {
  return (
    // Wrap everything inside AuthProvider
       <AuthProvider>
      <div className="flex flex-col min-h-screen">
        {/* Nav component fixed at the top */}
        <Nav />

        {/* Content area */}
        <div className="flex-1 overflow-y-auto">
        <Toaster />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </div>

      {/* Footer component fixed at the bottom */}
      <Footer />
      </div>
    </AuthProvider>
  );
}
