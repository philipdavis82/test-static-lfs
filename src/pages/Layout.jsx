import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to={import.meta.env.BASE_URL}>Home</Link>
          </li>
          <li>
            <Link to={import.meta.env.BASE_URL+"/blogs"}>Blogs</Link>
          </li>
          <li>
            <Link to={import.meta.env.BASE_URL+"/contact"}>Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;