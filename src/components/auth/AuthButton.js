import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { logout } from '../auth/service';
import { useAuth } from './context';

function AuthButton({  }) {
//   const { isLogged, handleLogout: onLogout } = useAuth();

const { isLogged, handleLogout: onLogout } = useAuth();

const { t } = useTranslation("global");


  const handleLogoutClick = async () => {
    await logout();
    onLogout();
  };

  return  (
    isLogged
    ?<span className="menu-title" onClick={handleLogoutClick}>Log out</span>
    :<NavLink
    to="/login">
    <span className="menu-title">Login</span>
  </NavLink>

  );
}

export default AuthButton;
