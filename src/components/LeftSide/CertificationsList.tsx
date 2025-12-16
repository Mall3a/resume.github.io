import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar } from "@mui/material";
import styled from "styled-components";

const StyledUl = styled.ul`
  display: flex;
`;

const StyledLi = styled.li`
  display: flex;
  flex-direction: row;
`;

const Container = styled.div`
  display; flex;
  flex-direction: column;
  padding-left: 20px;
  gap:5px;
`;

const Year = styled.div`
  font-size: 14px;
`;

const CertificationName = styled.div`
  font-size: 19px;
  font-weight: bold;
`;
const Institution = styled.div`
  font-size: 14px;
`;

const CertificationsList = () => {
  return (
    <StyledUl>
      <StyledLi>
        <Avatar
          alt="Hanban/Confucius Institute Headquarters, China"
          sx={{ width: 56, height: 56 }}
          src={require("../../images/Hanban.png")}
        />
        <Container>
          <Year>2013</Year>
          <CertificationName>HSK (Level 4) Chinese Proficiency Test</CertificationName>
          <Institution>
            Hanban/Confucius Institute Headquarters, China
          </Institution>
          {false && (
            <a
              href={require("../../files/CERT_HSK_LEVEL4.pdf")}
              download
            >
              <FontAwesomeIcon
                color="white"
                icon={faDownload}
                aria-hidden="true"
              ></FontAwesomeIcon>
            </a>
          )}
        </Container>
      </StyledLi>
    </StyledUl>
  );
};

export default CertificationsList;
