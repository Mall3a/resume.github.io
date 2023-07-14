import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faGraduationCap,
  faBriefcase,
  faAddressCard,
  faEarthAmericas,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import ContactInfoList from "./components/LeftSide/ContactInfoList";
import EducationList from "./components/RightSide/EducationList";
import LanguagesList from "./components/LeftSide/LanguagesList";
import ProfilePicture from "./components/LeftSide/ProfilePicture";
import WorkList from "./components/RightSide/WorkList";
import SkillsList from "./components/LeftSide/SkillsList";
import { Chip, Stack } from "@mui/material";
import ToolsList from "./components/LeftSide/ToolsList";

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto Condensed";
}
body {
  background: lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

a {
  color: #fff;
}
a:visited,
a:hover,
a:active,
a:focus {
  color: #fff;
}
p {
  color: #333;
}
`;

const StyledContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1000px;
  min-height: 1000px;
  background: #fff;
  margin: 50px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  box-shadow: 0 35px 55px rgba(0, 0, 0, 0.1);
`;

const StyledRightSide = styled.div`
  position: relative;
  background: #fff;
  padding: 40px;
`;

const StyledLeftSide = styled.div`
  position: relative;
  background: #353f70ff;
  padding: 40px;
  color: white;
`;

const StyledIcon = styled.span``;

const StyledTitle = styled.h2`
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 1px;
  margin-bottom: 20px;
`;

const StyledTitle2 = styled.h2`
  color: darkblue;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 10px;
`;

const StyledAbout = styled.div`
  margin-bottom: 50px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const StyledAboutInterests = styled.div`
  margin-bottom: 50px;

  &:last-child {
    margin-bottom: 0;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }

  ul li {
    list-style: none;
    color: #333;
    font-weight: 500;
    margin: 10px 0;
  }

  ul li ${StyledIcon} {
    color: #0dbdbd;
    font-size: 18px;
    width: 20px;
  }
  label {
    margin-left: 10px;
  }
`;
const TitleContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const Resume = ({}) => {
  return (
    <>
      <GlobalStyles />
      <StyledContainer>
        <StyledLeftSide>
          <ProfilePicture />
          <TitleContainer>
            <StyledTitle>Contact Information</StyledTitle>
          </TitleContainer>
          <ContactInfoList />
          <TitleContainer>
            <FontAwesomeIcon
              fontSize={25}
              color="white"
              icon={faEarthAmericas}
              aria-hidden="true"
            ></FontAwesomeIcon>
            <StyledTitle>Languages</StyledTitle>
          </TitleContainer>
          <LanguagesList></LanguagesList>
          <StyledAbout>
            <TitleContainer>
              <FontAwesomeIcon
                fontSize={25}
                color="white"
                icon={faCode}
                aria-hidden="true"
              ></FontAwesomeIcon>
              <StyledTitle>Professional Skills</StyledTitle>
            </TitleContainer>
            <SkillsList />
          </StyledAbout>

          <StyledAboutInterests>
            <TitleContainer>
              <FontAwesomeIcon
                fontSize={25}
                color="white"
                icon={faGear}
                aria-hidden="true"
              ></FontAwesomeIcon>
              <StyledTitle>Tools, Libraries & Frameworks</StyledTitle>
            </TitleContainer>
            <ToolsList />
          </StyledAboutInterests>
        </StyledLeftSide>
        <StyledRightSide>
          <StyledAbout>
            <TitleContainer>
              <FontAwesomeIcon
                fontSize={25}
                color="darkblue"
                icon={faAddressCard}
                aria-hidden="true"
              ></FontAwesomeIcon>
              <StyledTitle2>Summary</StyledTitle2>
            </TitleContainer>
            <p>
              I have a total of 6 years of professional experience in the IT
              industry, mostly in Front-End web development using React with
              Javascript and Typescript. I also have experience in Back-End web
              development using Java with Spring Boot developing Rest APIs and
              developing RPAs using BluePrism Software. I have worked with agile
              methodology, and used different front-end frameworks and
              libraries.
            </p>
          </StyledAbout>
          <TitleContainer>
            <FontAwesomeIcon
              fontSize={25}
              color="darkblue"
              icon={faGraduationCap}
              aria-hidden="true"
            ></FontAwesomeIcon>
            <StyledTitle2>Education</StyledTitle2>
          </TitleContainer>
          <EducationList />
          <TitleContainer>
            <FontAwesomeIcon
              fontSize={25}
              color="darkblue"
              icon={faBriefcase}
              aria-hidden="true"
            ></FontAwesomeIcon>
            <StyledTitle2> Work Experience</StyledTitle2>
          </TitleContainer>
          <WorkList />
        </StyledRightSide>
      </StyledContainer>
    </>
  );
};

export default Resume;
