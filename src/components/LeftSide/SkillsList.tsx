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
`;

const SkillsList = () => {
  return (
    <>
      <StyledBox>
        <Rating placeholder="Javascript EC6" value={4}></Rating>
      </StyledBox>
      <StyledBox>
        <Rating placeholder="Typescript" value={3}></Rating>
      </StyledBox>
      <StyledBox>
        <Rating placeholder="React" value={4}></Rating>
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
        <Rating placeholder="Styled-components" value={4}></Rating>
      </StyledBox>
      <StyledBox>
        <Rating placeholder="Java" value={2.5}></Rating>
      </StyledBox>
    </>
  );
};

export default SkillsList;
