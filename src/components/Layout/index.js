import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/aboutus">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav> */}
      <Link to="/"></Link>
      <Link to="/aboutus"></Link>
      <Link to="/contact"></Link>
      <Link to="/vision"></Link>

      <Outlet />
    </>
  )
};

export default Layout;