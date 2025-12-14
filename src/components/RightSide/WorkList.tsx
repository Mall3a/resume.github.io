import { Avatar, AvatarGroup } from "@mui/material";
import React from "react";
import styled from "styled-components";
import Accordeon from "../Common/Accordeon";

const StyledYearCompany = styled.div`
  min-width: 150px;
  justify-self: left;
  display: flex;
  align-items: center;
  gap: 10px;
  h5 {
    text-transform: uppercase;
    color: #848c90;
    font-weight: 600;
  }

  @media (max-width: 600px) {
    min-width: 150px;
    margin-bottom: 5px;
  }
`;

const StyledText = styled.span`
  display: flex;
  flex-direction: column;
  gap: 10px;
  h4 {
    text-transform: uppercase;
    color: darkblue;
    text-shadow: 0 0 darkblue;
    font-weight: bold;
    font-size: 16px;
  }
`;
const StyledBox = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px 0;
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: 130px 1fr;
  justify-content: center;
  align-items: center;
  justify-items: center;
  gap: 5px;
  h4 {
    text-transform: uppercase;
    color: darkblue;
    font-weight: 900;
    text-shadow: 0 0 darkblue;
  }

  h5 {
    color: black;
    font-weight: 900;
    text-shadow: 0 0 black;
  }
`;

const WorkList = () => {
  return (
    <>
      <StyledBox>
        <AvatarGroup max={2}>
          <Avatar
            alt="Globant"
            src={require("../../images/globant.png")}
            sx={{ width: 56, height: 56 }}
          />
          <Avatar
            alt="Autodesk"
            src={require("../../images/autodesk.png")}
            sx={{ width: 56, height: 56 }}
          />{" "}
        </AvatarGroup>
        <StyledText>
          <h4>Web UI Developer — Globant (Autodesk)</h4>
          <p>
            Front-end developer working as a contractor for Autodesk,
            contributing to development on internal tools and Autodesk
            Construction Cloud using React and TypeScript.
          </p>
        </StyledText>
        <h5 style={{ color: "black" }}>Globant - Autodesk</h5>
        <StyledYearCompany>
          <h5>Jun 2021 - Mar 2025</h5>
          <h6>~3 years and 10 months</h6>
        </StyledYearCompany>
      </StyledBox>
      <Accordeon
        content={[
          "Migrated legacy code and improved performance through refactoring and optimizing rendering in micro-frontend architecture",
          "Built reusable components, improving UI consistency",
          "Developed and maintained multiple front-end features for multiple Autodesk platforms",
          "Contribuited building a brand new admin site using Autodesk’s internal UI library.",
          "Ensured UI quality through automated testing with Jest, React Testing Library, and Cypress.",
        ]}
      />
      <StyledBox>
        <AvatarGroup max={2}>
          <Avatar
            alt="IT Axioma"
            src={require("../../images/itaxioma.png")}
            sx={{ width: 56, height: 56 }}
          />
          <Avatar
            alt="Cencosud-Scotiabank"
            src={require("../../images/cencosud-scotiabank.png")}
            sx={{ width: 56, height: 56 }}
          />{" "}
        </AvatarGroup>
        <StyledText>
          <h4>Full Stack Developer</h4>
          <p>
            Working as a contractor for Cencosud Scotiabank, as a Full Stack
            developer utilizing React, Redux, Express JS, JavaScript, HTML, CSS,
            Java EE, Spring Boot, and GIT.
          </p>
        </StyledText>
        <h5 style={{ color: "black" }}>IT Axioma - Cencosud-Scotiabank</h5>
        <StyledYearCompany>
          <h5>Jan 2021 - Jun 2021</h5>
          <h6>~6 months</h6>
        </StyledYearCompany>
      </StyledBox>
      <Accordeon
        content={[
          "Built reusable interactive UI components (carousels, modals) in Storybook, improving usability and consistency across the customer portal.",
          "Strengthened API architecture through BFF implementation following hexagonal architecture.",
        ]}
      />
      <StyledBox>
        <Avatar
          alt="Groupon"
          src={require("../../images/groupon.png")}
          sx={{ width: 56, height: 56 }}
        />{" "}
        <StyledText>
          <h4>Software Development Engineer</h4>
          <p>
            Front-end developer at Groupon, contributing to develop and refactor
            features in their main website using React, JavaScript, and CSS,
            axios and GIT.
          </p>
        </StyledText>
        <h5 style={{ color: "black" }}>Groupon</h5>
        <StyledYearCompany>
          <h5>Jun 2020 - Jan 2021</h5>
          <h6>~7 months</h6>
        </StyledYearCompany>
      </StyledBox>
      <Accordeon
        content={[
          "Enhanced checkout experience",
          "Resolved major UI bugs for mobile users",
          "Introduced new delivery features, increasing overall usability",
        ]}
      />
      <StyledBox>
        <AvatarGroup max={2}>
          <Avatar
            alt="Exanova Technology"
            src={require("../../images/exanova.png")}
            sx={{ width: 56, height: 56 }}
          />
          <Avatar
            alt="Edenred"
            src={require("../../images/edenred.png")}
            sx={{ width: 56, height: 56 }}
          />{" "}
        </AvatarGroup>
        <StyledText>
          <h4>Front End Developer</h4>
          <p>
            Developed Edenred’s private portal using Angular 8, TypeScript, and
            Angular Material, HTML, CSS, and Bootstrap libraries.
          </p>
        </StyledText>
        <h5 style={{ color: "black" }}>Exanova Technology - Edenred</h5>
        <StyledYearCompany>
          <h5>Jan 2020 - Jun 2020</h5>
          <h6>~6 months</h6>
        </StyledYearCompany>
      </StyledBox>
      <Accordeon
        content={[
          "Delivered key UI sections for a private portal using Angular 8, TypeScript, and Angular Material.",
        ]}
      />

      <StyledBox>
        <AvatarGroup max={2}>
          <Avatar
            alt="Deloitte Chile"
            src={require("../../images/deloitte.png")}
            sx={{ width: 56, height: 56 }}
          />
          <Avatar
            alt="Falabella Retail"
            src={require("../../images/falabella.png")}
            sx={{ width: 56, height: 56 }}
          />{" "}
          <Avatar alt="Falabella Bank" sx={{ width: 56, height: 56 }} />{" "}
          <Avatar alt="Sodimac" sx={{ width: 56, height: 56 }} />{" "}
          <Avatar alt="Cardif" sx={{ width: 56, height: 56 }} />{" "}
        </AvatarGroup>

        <StyledText>
          <h4>RPA Developer & Consultant</h4>
          <p>
            RPA developer at Deloitte Chile, Developed process automation
            solutions (RPAs) using Blue Prism for banking and retail clients
            such as Falabella Retail & Bank, BNP Paribas Cardif Chile and
            Sodimac, replacing manual processes.
          </p>
        </StyledText>
        <h5 style={{ color: "black" }}>
          Deloitte Chile - Sodimac - Falabella Bank & Retail - BNP Paribas
          Cardif Chile
        </h5>
        <StyledYearCompany>
          <h5>Nov 2018 - Dec 2019</h5>
          <h6>~1 year and 1 month</h6>
        </StyledYearCompany>
      </StyledBox>
      <Accordeon
        content={[
          "Reduced manual workload, minimized errors, and delivered automations that significantly decreased operational time for banking and retail processes.",
        ]}
      />

      <StyledBox>
        <AvatarGroup
          max={2}
          sx={{
            "&& .MuiAvatar-root": {
              borderWidth: 2,
              borderStyle: "solid",
              borderColor: "lightgray",
            },
          }}
        >
          <Avatar
            alt="IBM de Chile SAC"
            src={require("../../images/ibm.png")}
            sx={{
              width: 54,
              height: 56,
            }}
          />
          <Avatar
            alt="Itaú Bank"
            src={require("../../images/itau.png")}
            sx={{ width: 56, height: 56 }}
          />
        </AvatarGroup>
        <StyledText>
          <h4>IBM Websphere Portal Developer</h4>
          <p>
            Front-end developer at IBM, contributing to Itaú Bank’s private
            banking portal using IBM Websphere Portal framework, JavaScript,
            HTML, and CSS.
          </p>
        </StyledText>
        <h5 style={{ color: "black" }}>IBM de Chile SAC - Itaú Bank</h5>
        <StyledYearCompany>
          <h5>Jan 2017 - Nov 2018</h5>
          <h6>~1 year and 10 months</h6>
        </StyledYearCompany>
      </StyledBox>
      <Accordeon
        content={[
          "Reduced customer complaints by improving password recovery flow",
          "created mortgage status section",
          "Mentored a junior developer",
        ]}
      />
    </>
  );
};

export default WorkList;
