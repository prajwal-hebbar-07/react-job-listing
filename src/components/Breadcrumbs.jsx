import { useLocation, Link } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  let currentLink = "";
  const crumbs = location.pathname.split("/").map((crumb, index) => {
    if (index === 0) {
      return null;
    }
    currentLink += "/" + crumb;
    return (
      <div className="crumb" key={index}>
        <Link to={currentLink}>{crumb}</Link>
      </div>
    );
  });

  return <div className="breadcrumbs">{crumbs}</div>;
};
export default Breadcrumbs;
