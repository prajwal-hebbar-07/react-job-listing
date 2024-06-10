import { useParams, useLoaderData } from "react-router-dom";

const CareerDetails = () => {
  const { id } = useParams();
  const career = useLoaderData();
  return (
    <div className="career-details">
      <h2>{career.title}</h2>
      <p>Starting Salary - {career.salary}</p>
      <p>Location - {career.location}</p>
    </div>
  );
};
export default CareerDetails;

export const careerDetailsLoader = async ({ params }) => {
  const response = await fetch(`http://localhost:3001/careers/${params.id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch career details");
  }
  return response.json();
};
