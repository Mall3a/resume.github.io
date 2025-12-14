import styled from "styled-components";
import Rating from "../Common/Rating";

const StyledBox = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px 0;
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: 150px 1fr;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
     {
      flex-direction: column;

      grid-template-columns: repeat;
    }
  }
`;

const SkillsList = () => {
  return (
    <>
      <StyledBox>
        <Rating placeholder="Javascript ES6" value={3.5}></Rating>
      </StyledBox>
      <StyledBox>
        <Rating placeholder="Typescript" value={3}></Rating>
      </StyledBox>
      <StyledBox>
        <Rating placeholder="React" value={3.5}></Rating>
      </StyledBox>
      <StyledBox>
        <Rating placeholder="Git" value={3}></Rating>
      </StyledBox>
      <StyledBox>
        <Rating placeholder="HTML5" value={3}></Rating>
      </StyledBox>
      <StyledBox>
        <Rating placeholder="CSS3" value={3.5}></Rating>
      </StyledBox>
      <StyledBox>
        <Rating placeholder="Java" value={2}></Rating>
      </StyledBox>
    </>
  );
};

export default SkillsList;
