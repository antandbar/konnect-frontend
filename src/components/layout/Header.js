import { Link, NavLink } from 'react-router-dom';
import classNames from 'classnames';
import '../style.css';
import logo from '../../assets/img/konnect-logo.svg';
import AuthButton from '../auth/AuthButton';
import { useTranslation } from 'react-i18next';

function Header({ className }) {
  const { t } = useTranslation("global");
  return (
    /* imagen corporativa */
    <header>
       <Link to="/">
          <img src={logo} className="logo" alt="konnect-logo"></img>
        </Link>
      <div className="logo-container">
       
        {/* links a crear anuncio y todos los anuncios */}
        <nav className="main-menu">
          <NavLink
            to="/activities/activities"
            className={classNames(
              ({ isActive }) => (isActive ? 'active' : ''),
              'menu-item actividades',
            )}
          >
            <span className="menu-title">{t("header.activities")}</span>
          </NavLink>
          <NavLink
            to="/myplans"
            className={classNames(
              ({ isActive }) => (isActive ? 'active' : ''),
              'menu-item planes',
            )}
          >
            <span className="menu-title">{t("header.my-plans")}</span>
          </NavLink>

          <NavLink
            to="/myaccount"
            className={classNames(
              ({ isActive }) => (isActive ? 'active' : ''),
              'menu-item cuenta',
            )}
            end
          >
            <span className="menu-title">{t("header.my-account")}</span>
          </NavLink>

          <NavLink
            to="/"
            className={classNames(
              ({ isActive }) => (isActive ? 'active' : ''),
              'menu-item new-activity',
            )}
        
          >
            <span className="menu-title">{t("header.create-activity")}</span>
          </NavLink>
          {/* botón para ir a login/logout */}
          <AuthButton className="menu-item menu-btn login" />
        </nav>
      </div>
    </header>
  );
}

export default Header;
