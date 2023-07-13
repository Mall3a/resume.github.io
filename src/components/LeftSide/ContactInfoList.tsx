import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";

import styled from "styled-components";

const StyledIcon = styled.span``;

const StyledContactInfo = styled.div`
  margin-bottom: 40px;

  ul li ${StyledIcon} {
    display: inline-block;
    width: 30px;
    font-size: 20px;
    color: white;
  }
`;

const ContactInfoList = () => {
  return (
    <StyledContactInfo>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <StyledIcon>
                <img
                  width="30"
                  src="https://www.svgrepo.com/show/452213/gmail.svg"
                  aria-hidden="true"
                ></img>
              </StyledIcon>
            </ListItemIcon>
            <a href="mailto:comallea@gmail.com">comallea@gmail.com</a>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <StyledIcon>
                <img
                  width="30"
                  src="https://www.svgrepo.com/show/452133/whatsapp.svg"
                  aria-hidden="true"
                ></img>
              </StyledIcon>
            </ListItemIcon>
            <a href="https://wa.me/56981559283">+56 9 81559283</a>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            {" "}
            <ListItemIcon>
              <StyledIcon>
                <img
                  width="30"
                  color="white"
                  src="https://www.svgrepo.com/show/138936/linkedin.svg"
                />
              </StyledIcon>
            </ListItemIcon>
            <a href="https://bit.ly/46NCjlk">/constanza-mallea</a>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <StyledIcon>
                <img
                  width="30"
                  src="https://www.svgrepo.com/show/452221/google-maps.svg"
                  aria-hidden="true"
                ></img>
              </StyledIcon>
            </ListItemIcon>
            <a href="http://maps.google.com/?q=Ñuñoa, Santiago, Chile">
              Ñuñoa, Santiago, Chile
            </a>
          </ListItemButton>
        </ListItem>
      </List>
    </StyledContactInfo>
  );
};
export default ContactInfoList;
