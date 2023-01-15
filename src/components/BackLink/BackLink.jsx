import { HiArrowLeft } from "react-icons/hi";
import { BackLinkBtn } from "./BackLink.styled";

export const BackLink = ({ onClick }) => {
  return (
    <BackLinkBtn type='button' onClick={onClick()}>
      <HiArrowLeft size="24" />
      <p>Go back</p>
    </BackLinkBtn>
  );
};