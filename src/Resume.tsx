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
  faMousePointer,
} from "@fortawesome/free-solid-svg-icons";
import ContactInfoList from "./components/LeftSide/ContactInfoList";
import EducationList from "./components/RightSide/EducationList";
import LanguagesList from "./components/LeftSide/LanguagesList";
import ProfilePicture from "./components/LeftSide/ProfilePicture";
import WorkList from "./components/RightSide/WorkList";
import SkillsList from "./components/LeftSide/SkillsList";
import ToolsList from "./components/RightSide/ToolsList";
import CoursesList from "./components/LeftSide/CoursesList";

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
  max-width: 1123px;
  // min-height: 1000px;
  // background: #fff;
  // margin: 50px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  // box-shadow: 0 35px 55px rgba(0, 0, 0, 0.1);

  @media (max-width: 1000px) {
    margin: 10px;
    grid-template-columns: repeat(1, 1fr);
  }
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
  margin-bottom: 20px;
`;

const StyledAbout = styled.div`
  margin-bottom: 30px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const StyledAboutInterests = styled.div`
  margin-bottom: 50px;

  margin-top: 30px;
  @media (max-width: 1000px) {
    ul {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 600px) {
    ul {
      grid-template-columns: repeat(1, 1fr);
    }
  }

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

const StyledA = styled.a`
  color: #333;

  &:hover {
    color: darkblue;
  }

  &:visited {
    color: darkred;
  }
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

          {false && (
            <StyledAbout>
              <TitleContainer>
                <FontAwesomeIcon
                  fontSize={25}
                  color="white"
                  icon={faMousePointer}
                  aria-hidden="true"
                ></FontAwesomeIcon>
                <StyledTitle>Courses</StyledTitle>
              </TitleContainer>
              <CoursesList />
            </StyledAbout>
          )}
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
              Front-End Developer with 5+ years of experience building modern,
              accessible, and scalable web interfaces using React, TypeScript,
              and JavaScript. Experienced in maintaining and improving existing
              products, building new features, and collaborating remotely with
              international agile teams. Focused on clean code, usability,
              performance, and delivering reliable UI solutions for large-scale
              applications.
            </p>
            {false && (
              <>
                <br />
                <p>
                  I am not currently in Canada. However, I am LMIA-exempt
                  because I am covered under the Canada-Chile Free Trade
                  Agreement{" "}
                  <StyledA href="https://www.international.gc.ca/trade-commerce/trade-agreements-accords-commerciaux/agr-acc/chile-chili/index.aspx?lang=eng">
                    (CCFTA)
                  </StyledA>
                </p>
              </>
            )}
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
