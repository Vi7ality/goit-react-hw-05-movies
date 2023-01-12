import { Link } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";

export const BackLink = ({ to }) => {
  return (
    <Link to={to}>
      <HiArrowLeft size="24" />
      <p>Go back</p>
    </Link>
  );
};