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
`;

const Year = styled.div`
  font-size: 14px;
`;

const CourseName = styled.div`
  font-size: 19px;
  font-weight: bold;
`;
const Institution = styled.div`
  font-size: 14px;
`;

const CoursesList = () => {
  return (
    <StyledUl>
      <StyledLi>
        <Avatar
          alt="Confucius Institute - Pontifical Catholic University of Chile"
          sx={{ width: 56, height: 56 }}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjyEU5MbCUZ-n7mKEMX8NwX0D6EFB2ViY_ytTlex7BysdVIlK5Sf09qFSsYjcPcTm8RDU&usqp=CAU"
        />
        <Container>
          <Year>2013</Year>
          <CourseName>Mandarin Chinese Course - Advanced Level</CourseName>

          <Institution>
            Confucius Institute - Pontifical Catholic University of Chile
          </Institution>
          <a href={require("../../files/CERT_CURSO_INSTCONFUCIO.pdf")} download>
            <FontAwesomeIcon
              color="white"
              icon={faDownload}
              aria-hidden="true"
            ></FontAwesomeIcon>
          </a>
        </Container>
      </StyledLi>
    </StyledUl>
  );
};

export default CoursesList;
