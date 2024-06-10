import { Link, useLoaderData } from "react-router-dom";

const Careers = () => {
  const careers = useLoaderData();

  return (
    <div className="careers">
      {careers.map((career) => (
        <Link key={career.id} to={career.id} className="career">
          <h3>{career.title}</h3>
          <p>{career.description}</p>
          <p>Location: {career.location}</p>
          <p>Salary: {career.salary}</p>
        </Link>
      ))}
    </div>
  );
};
export default Careers;

// loader function to load the data from database.json. Since this should be go from an api we will just host the json using json-server and then write the loader function to fetch the data from the json file.

export const careersLoader = async () => {
  const response = await fetch("http://localhost:3001/careers");
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Failed to fetch careers data");
  }
  return data;
};
