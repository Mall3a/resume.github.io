import { Avatar, AvatarGroup } from "@mui/material";
import React from "react";
import styled from "styled-components";
import Accordeon from "../Common/Accordeon";
const StyledYearCompany = styled.div`
  min-width: 150px;
  justify-self: left;
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
  const autodeskResponsabilities = [
    "As a contractor for Autodesk, develop front-end solutions using SASS, styled-components, JavaScript, TypeScript, React, Redux, Redux Toolkit, MobX and Storybook",
    "Conduct thorough unit tests using Jest, React Testing Library, and Cypress",
    "Participate in Agile development processes",
  ];

  const itAxiomaResponsibilities = [
    "Use React, Redux, Express JS, JavaScript, HTML, CSS, and Storybook framework to create interactive and responsive user interfaces.",
    "Participate in Agile development processes",
    "Develop a Backend for Frontend (BFF) and RESTful APIs using Java EE and Spring Boot, following a hexagonal architecture, to enable efficient data retrieval and manipulation.",
    "Create react components in the client’s private library, using the Storybook framework.",
    "Use GIT as a version control tool.",
    "Review and approve pull requests from the development team.",
  ];

  const grouponResponsibilities = [
    "Collaborate closely with the development team to understand project requirements and translate them into functional and visually appealing features.",
    "Use React, JavaScript, HTML, CSS, and GIT as version control tool to enhance the user interface.",
    "Work on bug fixes to maintain a high quality and error-free website.",
  ];

  const exanovaResponsibilities = [
    "Collaborate with the development team to understand project requirements and translate them into functional and visually appealing features.",
    "Use Angular 8, TypeScript, HTML, CSS, C#, Angular Material, and Bootstrap libraries to implement and enhance the user interface.",
    "Implement responsive design principles",
    "Participate in Agile development processes, using Azure DevOps as the project management platform.",
    "Use GIT as version control tool",
    "Collaborate with backend developers to integrate rest API.",
  ];

  const deloitteResponsibilities = [
    "Collaborate with the clients to understand their specific automation requirements and translate them into effective BluePrism solutions.",
    "Develop RPAs utilizing BluePrism software to automate key processes for clients such as Falabella Retail, Falabella Bank, BNP Paribas Cardif, and Sodimac.",
    "Conduct thorough testing and debugging of BluePrism automation workflows to ensure smooth and error-free process execution.",
    "Integrate BluePrism automation with other systems and technologies to Implement efficient and accurate RPA solutions.",
  ];

  const ibmResponsibilities = [
    "First 4 months of internship, then was offered a permanent position in the team",
    "Identify and resolve bugs in the web to improve the user interface",
    "Develop and enhance front end functionalities",
    "Assist in the training and supervision of a fellow developer assigned to the team",
    "Use of Javascript, HTML, CSS, IBM WebSphere Portal 8, Java Helper Classes and IBM Rational Team Concert as version control Tool.",
    "Use of XML-related technologies, including XML, XSL and XSD to handle data transformation and data integration and (SOAP services)",
  ];

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
          <h4>Web UI Developer Ssr Adv</h4>
          <p>
            Working as a contractor for Autodesk, specializing in Front End
            development, using styled-components, JavaScript, TypeScript, React,
            Redux, MobX, Storybook, React Testing Library and Cypress.
          </p>
        </StyledText>
        <h5 style={{ color: "black" }}>Globant - Autodesk</h5>
        <StyledYearCompany>
          <h5>Jun 2021 - Feb 2025</h5>
        </StyledYearCompany>
      </StyledBox>
      {false && (
        <Accordeon
          title="Responsabilities"
          content={autodeskResponsabilities}
        />
      )}
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
        </StyledYearCompany>
      </StyledBox>
      {false && (
        <Accordeon
          title="Responsibilities"
          content={itAxiomaResponsibilities}
        />
      )}
      <StyledBox>
        <Avatar
          alt="Groupon"
          src={require("../../images/groupon.png")}
          sx={{ width: 56, height: 56 }}
        />{" "}
        <StyledText>
          <h4>Software Development Engineer</h4>
          <p>
            Front-End developer at Groupon, participating in the modification of
            their official website using React, JavaScript, CSS, axios, moment
            and GIT.
          </p>
        </StyledText>
        <h5 style={{ color: "black" }}>Groupon</h5>
        <StyledYearCompany>
          <h5>Jun 2020 - Jan 2021</h5>
        </StyledYearCompany>
      </StyledBox>
      {false && (
        <Accordeon title="Responsibilities" content={grouponResponsibilities} />
      )}
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
          <h4>Full Stack Developer</h4>
          <p>
            Working as a contractor for Edenred, as a Full Stack developer
            involved in the creation their private website and utilizing Angular
            8, C#, TypeScript, HTML, CSS, Angular Material, and Bootstrap
            libraries.
          </p>
        </StyledText>
        <h5 style={{ color: "black" }}>Exanova Technology - Edenred</h5>
        <StyledYearCompany>
          <h5>Jan 2020 - Jun 2020</h5>
        </StyledYearCompany>
      </StyledBox>
      {false && (
        <Accordeon title="Responsibilities" content={exanovaResponsibilities} />
      )}
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
            RPA developer at Deloitte Chile, specializing in developing several
            RPAs to automate processes for clients such as Falabella Retail &
            Bank, BNP Paribas Cardif Chile and Sodimac using Blueprism Software.
          </p>
        </StyledText>
        <h5 style={{ color: "black" }}>
          Deloitte Chile - Sodimac - Falabella Bank & Retail - BNP Paribas
          Cardif Chile
        </h5>
        <StyledYearCompany>
          <h5>Nov 2018 - Dec 2019</h5>
        </StyledYearCompany>
      </StyledBox>
      {false && (
        <Accordeon
          title="Responsibilities"
          content={deloitteResponsibilities}
        />
      )}
      <StyledBox>
        <AvatarGroup max={2}>
          <Avatar
            alt="IBM de Chile SAC"
            src={require("../../images/ibm.png")}
            sx={{ width: 54, height: 56 }}
          />
          <Avatar
            alt="Itaú Bank"
            src={require("../../images/itau.png")}
            sx={{ width: 56, height: 56 }}
          />{" "}
        </AvatarGroup>
        <StyledText>
          <h4>IBM Websphere Portal Developer</h4>
          <p>
            Front-End developer at IBM, and working as a contractor for Itaú
            Bank, contributing to the creation of the bank private website for
            individuals and companies using IBM Websphere Portal framework.
          </p>
        </StyledText>
        <h5 style={{ color: "black" }}>IBM de Chile SAC - Itaú Bank</h5>
        <StyledYearCompany>
          <h5>Jan 2017 - Nov 2018</h5>
        </StyledYearCompany>
      </StyledBox>
      {false && (
        <Accordeon title="Responsibilities" content={ibmResponsibilities} />
      )}
    </>
  );
};

export default WorkList;
