import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from "../Hooks/contextApi/UserContext";


function Logout() {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);
  

  let user = authContext?.user;

  const handleLogout = () => {
    user = null;
    navigate('/login');
  };

  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  );
}

export default Logout;
