import * as React from "react";
import styled from "styled-components";
import ProgressBar from "../Common/ProgressBar";

const StyledList = styled.div`
  gap: 15px;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;

const StyledListItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const LanguagesList = () => {
  return (
    <StyledList>
      <StyledListItem>
        <span>Spanish</span>
        <ProgressBar value={100} />
      </StyledListItem>
      <StyledListItem>
        <span>English</span>
        <ProgressBar value={90} />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "10px",
          }}
        ></div>
      </StyledListItem>
      <StyledListItem>
        <span>Mandarin Chinese</span>
        <ProgressBar value={50} />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "10px",
          }}
        ></div>
      </StyledListItem>
    </StyledList>
  );
};
export default LanguagesList;
