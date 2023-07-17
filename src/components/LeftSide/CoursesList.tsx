import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, List, ListItem, ListItemText } from "@mui/material";
import styled from "styled-components";

const Container = styled.div`
  padding-left: 20px;
`;

const CoursesList = () => {
  return (
    <List>
      <ListItem>
        <Avatar
          alt="Confucius Institute - Pontifical Catholic University of Chile"
          sx={{ width: 56, height: 56 }}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjyEU5MbCUZ-n7mKEMX8NwX0D6EFB2ViY_ytTlex7BysdVIlK5Sf09qFSsYjcPcTm8RDU&usqp=CAU"
        />
        <Container>
          <ListItemText>2013</ListItemText>
          <ListItemText>Mandarin Chinese Course - Advanced Level</ListItemText>

          <ListItemText>
            Confucius Institute - Pontifical Catholic University of Chile
          </ListItemText>
        </Container>
      </ListItem>
    </List>
  );
};

export default CoursesList;
