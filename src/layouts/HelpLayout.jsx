import { NavLink, Outlet } from "react-router-dom";

const HelpLayout = () => {
  return (
    <div className="help-layout">
      <h2>Help</h2>
      <p>
        Welcome to the JobScout Help Page! Here you can find answers to common
        questions and learn how to get in touch with us if you need further
        assistance.
      </p>
      <nav>
        <NavLink to={"faq"}>FAQ - About the Portal</NavLink>
        <NavLink to={"contact"}>Contact Us</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};
export default HelpLayout;
