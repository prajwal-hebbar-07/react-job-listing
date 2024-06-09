import { Outlet } from "react-router-dom";

const CareersLayout = () => {
  return (
    <div className="careers-layout">
      <h2>Careers</h2>
      <p>
        Welcome to the <span>JobScout</span> Careers page! Explore a diverse
        range of job opportunities tailored to various skills and interests.
        Whether you’re looking for a role in tech, healthcare, finance, or any
        other industry, you’ll find plenty of options to kickstart or advance
        your career.
      </p>

      <Outlet />
    </div>
  );
};
export default CareersLayout;
