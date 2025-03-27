import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import PageNotFound from './components/ErrorComponent';
import Footer from './shared/Footer/Footer';
import SignUp from './pages/signup/pages';
import Dashboard from './pages/dashboard/pages';
import Home from './pages/Home/pages';
import { Toaster } from 'react-hot-toast';
import Login from './pages/login/pages';
import AboutUs from './components/AboutUs';
import AuthProvider from './Hooks/contextApi/UserContext';
import UpdateBiodata from './components/form/UpdateBiodata';
import Biodata from './components/biodata/BiodataList';
import Analytic from './components/dashboard/analytics/Analytic';
import UserProfilePages from './pages/profile/UserProfilePages';
import Verify from './components/dashboard/verify/Verify';
import PrivateRoute from './components/PrivateRoute';
import BiodataList from './components/biodata/BiodataList';
import BiodataDetailsProfile from './pages/profile/BiodataDetailsProfile';

function NoMatch() {
  return <PageNotFound />;
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
            <Route path="/biodata" element={<BiodataList />} />
            <Route
              path="/biodata/profile/:id"
              element={<BiodataDetailsProfile />}
            />
            <Route element={<PrivateRoute />}>
              <Route path="/profile" element={<UserProfilePages />} />
              <Route path="/dashboard/*" element={<Dashboard />}>
                <Route path="edit/profile" element={<UpdateBiodata />} />
                <Route path="" element={<Analytic />} />
                <Route path="edit/verify" element={<Verify />} />
              </Route>
            </Route>
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </div>

        {/* Footer component fixed at the bottom */}
        <Footer />
      </div>
    </AuthProvider>
  );
}
