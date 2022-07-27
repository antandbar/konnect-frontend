import { NavLink } from 'react-router-dom';
import { logout } from '../auth/service';
import { useAuth } from './context';

function AuthButton() {

const { isLogged, handleLogout: onLogout } = useAuth();



  const handleLogoutClick = async () => {
    await logout();
    onLogout();
  };

  return  (
    isLogged
    ? <li className="menu-item menu-btn logout" onClick={handleLogoutClick}><span className="menu-title">Log out</span></li>
    : <li className="menu-item menu-btn login"><NavLink
    to="/login">
    <span className="menu-title">Login</span>
  </NavLink></li>

  );
}

export default AuthButton;
