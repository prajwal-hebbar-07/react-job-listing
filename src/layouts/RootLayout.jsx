import { NavLink, Outlet } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";

const RootLayout = () => {
  return (
    <div className="root-layout">
      {/* Header which will contain navbar and breadcrumbs */}
      <header>
        {/* Navbar */}
        <nav>
          {/* Navbar brand or Company Name or Logo */}
          <h1>JobScout</h1>
          {/* Navbar links that will redirect to different pages. */}
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"about"}>About</NavLink>
          <NavLink to={"help"}>Help</NavLink>
          <NavLink to={"careers"}>Careers</NavLink>
        </nav>
        {/* Breadcrumbs */}
        <Breadcrumbs />
      </header>

      {/* The main viewport that will display the data */}
      <main>
        <Outlet />
      </main>
    </div>
  );
};
export default RootLayout;
