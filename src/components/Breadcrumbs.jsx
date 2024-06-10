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
      <Link key={index} to={currentLink}>
        {crumb}
      </Link>
    );
  });

  return <div className="breadcrumbs">{crumbs}</div>;
};
export default Breadcrumbs;
