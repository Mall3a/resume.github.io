import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { Card } from "@mui/material";

const StyledEducationList = styled.ul`
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
  font-size: 16px;
  align-content: center;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-end;
`;

const StyledListItem = styled.div`
  display: flex;
  gap: 30px;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  align-content: space-around;

  h4 {
    text-shadow: 0 0 darkblue;
  }
  h4 h5 {
    width: 200px;
    padding: 5px;
    white-space: wrap;
    overflow: hidden;
  }
`;

const StyledCard = styled(Card)`
  padding: 15px;
  gap: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const EducationList = () => {
  return (
    <StyledEducationList>
      <StyledListItem>
        <StyledCard>
          <h5>2018 - 2022</h5>
          <h4>Software Engineer</h4>
          <h5>IP Duoc UC</h5>
          <a
            href={require("../../files/CERT_TITULO_DUOC_INGENIERO.pdf")}
            download
          >
            <FontAwesomeIcon
              color="darkblue"
              icon={faDownload}
              aria-hidden="true"
            ></FontAwesomeIcon>
          </a>
        </StyledCard>
      </StyledListItem>
      <StyledListItem>
        <StyledCard>
          <h5>2015 - 2017</h5>
          <h4>Software Developer</h4>
          <h5>IP Duoc UC</h5>
          <a
            href={require("../../files/CERT_TITULO_DUOC_ANALISTA.pdf")}
            download
          >
            <FontAwesomeIcon
              color="darkblue"
              icon={faDownload}
              aria-hidden="true"
            ></FontAwesomeIcon>
          </a>
        </StyledCard>
      </StyledListItem>
      {false && (
        <StyledListItem>
          <StyledCard>
            {" "}
            <h5>2015 - 2015</h5>
            <h4>Bilingual Executive Assistant</h4>
            <h5>CFT Manpower</h5>
            <a href={require("../../files/CERT_TITULO_MANPOWER.pdf")} download>
              <FontAwesomeIcon
                color="darkblue"
                icon={faDownload}
                aria-hidden="true"
              ></FontAwesomeIcon>
            </a>
          </StyledCard>
        </StyledListItem>
      )}

      {false && (
        <StyledListItem>
          <StyledCard>
            <h5>2010 - 2014</h5>
            <h4>Mandarin Chinese Translator</h4>
            <h5>UCINF University</h5>
            <a href={require("../../files/CERT_TITULO_UCINF.pdf")} download>
              <FontAwesomeIcon
                color="darkblue"
                icon={faDownload}
                aria-hidden="true"
              ></FontAwesomeIcon>
            </a>
          </StyledCard>
        </StyledListItem>
      )}
    </StyledEducationList>
  );
};

export default EducationList;
