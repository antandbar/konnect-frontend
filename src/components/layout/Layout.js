import { Outlet } from 'react-router-dom';
import Header from './Header';

function Layout() {
  return (
    <div className="layout">
      <Header className="layout-header bordered" />
      <main className="wrapper">
        <Outlet />
      </main>
      <footer className="layout-footer bordered">© 2022 Konnect</footer>
    </div>
  );
}

export default Layout;
