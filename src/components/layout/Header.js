import { Link, NavLink } from 'react-router-dom';
import classNames from 'classnames';
import '../../assets/scss/style.scss';
import logo from '../../assets/img/konnect-logo.svg';
import { useTranslation } from 'react-i18next';
import '../../assets/js/script.js';
import LanguageSwitcher from '../common/LanguageSwitcher';
import AuthButton from '../auth/AuthButton';

function Header({ className }) {
  const { t } = useTranslation("global");
  return (
    /* imagen corporativa */
    <header>
         <div className="logo-container">
          <img src={logo} className="logo" alt="konnect-logo"></img>
       </div>
  
        {/* links a crear anuncio y todos los anuncios */}
        <nav>
          <ul className="main-menu">
          <li className='menu-item actividades'>
              <NavLink
                to="/activities"
                className={classNames(
                  ({ isActive }) => (isActive ? 'active' : ''))}>
                      <span className="menu-title">{t("header.activities")}</span>
              </NavLink>  
          </li> 
          <li className="menu-item planes">
          <NavLink
            to="/myplans"
            className={classNames(
              ({ isActive }) => (isActive ? 'active' : ''))}>
                  <span className="menu-title">{t("header.my-plans")}</span>
          </NavLink>
          </li>
          <li className="menu-item cuenta">
          <NavLink
            to="/myaccount"
            className={classNames(
              ({ isActive }) => (isActive ? 'active' : '') )}end>
                  <span className="menu-title">{t("header.my-account")}</span>
          </NavLink>
          </li>
          <li className="menu-item new-activity menu-btn">
          <NavLink
            to="/newactivity"
            className={classNames(
              ({ isActive }) => (isActive ? 'active' : ''))}>
                  <span className="menu-title">{t("header.create-activity")}</span>
          </NavLink>
          </li>
          <li className="menu-item menu-btn login">
          <AuthButton/>
          </li>
          <li>
          <LanguageSwitcher></LanguageSwitcher>
          </li>
          </ul>

        </nav>
    </header>
  );
}

export default Header;
