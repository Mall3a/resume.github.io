import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import DraftsIcon from "@mui/icons-material/Drafts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";
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
                <FontAwesomeIcon
                  icon={faEnvelope}
                  aria-hidden="true"
                ></FontAwesomeIcon>
              </StyledIcon>
            </ListItemIcon>
            <a href="mailto:comallea@gmail.com">comallea@gmail.com</a>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <StyledIcon>
                <FontAwesomeIcon
                  icon={faMobileAlt}
                  aria-hidden="true"
                ></FontAwesomeIcon>
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
                  width="17"
                  src={window.location.origin + "/images/linkedin.svg"}
                ></img>
              </StyledIcon>
            </ListItemIcon>
            <a href="https://bit.ly/46NCjlk">/constanza-mallea</a>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <StyledIcon>
                <FontAwesomeIcon
                  icon={faLocationDot}
                  aria-hidden="true"
                ></FontAwesomeIcon>
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
