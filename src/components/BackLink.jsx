import { HiArrowLeft } from "react-icons/hi";

export const BackLink = ({ onClick }) => {
  return (
    <button type='button' onClick={onClick()}>
      <HiArrowLeft size="24" />
      <p>Go back</p>
    </button>
  );
};