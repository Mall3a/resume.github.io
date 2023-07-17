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
    "Develop and implement front-end solutions for Autodesk client using CSS, SASS, styled-components, JavaScript, TypeScript, React, Redux, Redux Toolkit, MobX, and Storybook to create scalable and interactive web applications.",
    "Collaborate closely with the client to understand their requirements and translate them into functional and visually appealing user interfaces.",
    "Conduct thorough unit tests using Jest, React Testing Library, and Cypress to ensure the quality and performance of the developed features.",
    "Actively participate in Agile development processes, including daily meetings, sprint planning, and retrospectives, moving Jira tickets in the Kanban board when done.",
    "Effectively communicate with the client in English, providing updates, addressing inquiries, and discussing project progress.",
  ];

  const autodeskImpact = [
    "Successfully delivered high-quality front-end solutions within project timelines, meeting client expectations, and ensuring customer satisfaction.",
    "Optimized performance by refactoring code and implementing best practices, improving code quality.",
  ];

  const autodeskAward = [
    "Recognized for outstanding performance and dedication, received a promotion in 2022 for exceptional customer focus and contribution to project success.",
  ];

  const itAxiomaResponsibilities = [
    "Developed full stack solutions for the Cencosud Scotiabank client in its agile cell, following the Scrum methodology.",
    "Utilized React, Redux, Express JS, JavaScript, HTML, CSS, and the Storybook framework to create interactive and responsive user interfaces.",
    "Collaborated with cross-functional teams to gather requirements, conduct code reviews, and ensure smooth integration of front-end and back-end components.",
    "Developed a Backend for Frontend (BFF) and RESTful APIs using Java EE and Spring Boot, following a hexagonal architecture, to enable efficient data retrieval and manipulation.",
    "Created multiple React components in the Cencosud Scotiabank private library, using the Storybook framework, for the development of their new customer website.",
    "Used GIT as a version control tool to manage the codebase and collaborate with team members.",
    "Reviewed and approved pull requests from the development team.",
  ];

  const itAxiomaImpact = [
    "Implemented reusable UI components, enhancing consistency across the application.",
    "Enhanced user engagement by implementing interactive and user-friendly features.",
    "Collaborated with QA teams to identify and resolve bugs, ensuring a high-quality and bug-free application.",
  ];

  const grouponResponsibilities = [
    "Participated in the creation and modification of Groupon official website as a Front-End developer.",
    "Utilized React, JavaScript, HTML, CSS, and GIT for version control to implement and enhance the user interface.",
    "Collaborated closely with the development team to understand project requirements and translate them into functional and visually appealing features.",
    "Implemented responsive design principles to ensure a seamless experience across different devices and screen sizes.",
    "Conducted regular code reviews and worked on bug fixes to maintain a high quality and error-free website.",
  ];

  const exanovaResponsibilities = [
    "Contributed to the creation of Edenred's private website as a Front-End developer.",
    "Utilized Angular 8, TypeScript, HTML, CSS, C#, Angular Material, and Bootstrap libraries to implement and enhance the user interface.",
    "Collaborated closely with the development team to understand project requirements and translate them into functional and visually appealing features.",
    "Implemented responsive design principles to ensure a seamless experience across different devices and screen sizes.",
    "Worked in an Agile environment following the SCRUM methodology, utilizing Azure DevOps as the project management platform.",
    "Utilized GIT for version control to manage the codebase and collaborate with team members.",
    "Collaborated with backend developers to integrate API endpoints and ensure seamless data exchange, resulting in a more robust and functional website.",
  ];

  const deloitteResponsibilities = [
    "Collaborate closely with the clients to understand their specific automation requirements and translate them into effective Blueprism solutions.",
    "Develop RPAs utilizing Blueprism software to automate key processes for clients such as CMR Falabella, Banco Falabella, Cardif, and Sodimac.",
    "Analyze existing processes to identify opportunities for automation and implement efficient and accurate RPA solutions.",
    "Conduct thorough testing and debugging of Blueprism automation workflows to ensure smooth and error-free process execution.",
    "Collaborate with cross-functional teams to integrate Blueprism automation with other systems and technologies.",
  ];

  const deloitteImpact = [
    "Improved efficiency in the automation of critical processes for CMR Falabella, Banco Falabella, Cardif, and Sodimac through Blueprism implementation.",
    "Achieved significant time and cost savings for the clients by automating manual and repetitive tasks.",
    "Enhanced data accuracy and reduced errors by implementing robust error handling mechanisms in the Blueprism automation workflows.",
    "Contributed to the overall success and customer satisfaction of the clients by delivering high-quality and reliable automation solutions.",
    "Completed Guidewire Suite Training and obtained Guidewire 10 Fundamentals Certification.",
    "Studied and familiarized myself with the Guidewire platform, gaining a deep understanding of its core concepts and functionalities.",
    "Applied the knowledge gained from the training to effectively contribute to the development and implementation of Guidewire-based solutions.",
  ];

  const ibmResponsibilities = [
    "Undertook a professional internship as a Front-End developer, focusing on corrective maintenance of Itaú Bank website for individuals and companies.",
    "Collaborated with the team to identify and resolve issues and bugs in the web, ensuring its smooth operation and user satisfaction.",
    "Utilized IBM WebSphere Portal v7.5, based on Eclipse, to develop and enhance the front-end functionalities of the web portal.",
    "Used JavaScript, jQuery, HTML5, CSS3, and Java EE Helper classes to address maintenance requirements and improve the user interface.",
    "Worked with XML-related technologies, including XSL, XSD, and XML, to handle data transformation and ensure proper data integration.",
    "Employed IBM Rational Team Concert (RTC) as the version control tool to manage and track changes in the codebase.",
  ];

  const ibmImpact = [
    "Played a role as a technical referee within the development team, bringing expertise in the IBM WebSphere Portal framework.",
    "Created a dedicated section on the website for Banco Itaú's customers to check the status of their mortgage loan applications.",
    "Assisted in the training and supervision of a fellow developer assigned to the agile team.",
    "Improved the user experience for Itaú Bank customers by developing the Credit and Debit Card Blocking section.",
    "Enhanced the password recovery section on the website, resulting in a reduction in customer complaints.",
  ];

  const ibmAwards = [
    "Recognized for contributions to the team, outstanding performance, and exceptional results, and was offered a permanent position in the company.",
  ];

  const listofRobotsCreated = [
    "Blacklist Query Robot for BNP Paribas Cardif client",
    "Closure of Bank Accounts Robot for Falabella Bank client",
    "Credit Card Blocking Robot for CMR Falabella client",
    "Conciliation of letters of credit Robot for Sodimac S.A. client",
  ];

  return (
    <>
      <StyledBox>
        <AvatarGroup max={2}>
          <Avatar
            alt="Globant"
            src="https://media.licdn.com/dms/image/D560BAQHWB0kBTxn0kA/company-logo_100_100/0/1688411226020?e=1697068800&v=beta&t=C3Xcftoc4EmSIoLgJvQgWGIe2gI26xaQieg0z0FfVEc"
            sx={{ width: 56, height: 56 }}
          />
          <Avatar
            alt="Globant"
            src="https://media.licdn.com/dms/image/D560BAQGfuQkbYJZz1g/company-logo_100_100/0/1688187924213?e=1697068800&v=beta&t=uTV7XHqccqNNTE4sdVOOk2KDmtGTo9CXf1yr6d7CR2U"
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
          <h5>Jun 2021 - Current</h5>
        </StyledYearCompany>
      </StyledBox>

      <StyledBox>
        <AvatarGroup max={2}>
          <Avatar
            alt="IT Axioma"
            src="https://media.licdn.com/dms/image/C4E0BAQFVC42RRkwUew/company-logo_100_100/0/1554146146130?e=1697068800&v=beta&t=fdFvHy0sMOwSR1OBxv1W5MPscvHOC5MoNzzkVqrc3xY"
            sx={{ width: 56, height: 56 }}
          />
          <Avatar
            alt="Cencosud-Scotiabank"
            src="https://play-lh.googleusercontent.com/rpJ0OaAXJOgarnPrbwPklbgzMVS3CrfTWl3RNgRnRAAu_GpKyMMVKYdfmj5NAfLw2yLb"
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

      <StyledBox>
        <Avatar
          alt="Groupon"
          src="https://media.licdn.com/dms/image/D4E0BAQHGY3um1bs0lg/company-logo_100_100/0/1688371558672?e=1697068800&v=beta&t=JW9bIJfN10fbWeSu3J7go7cx0WDT2qK_KLOyz-OSjvU"
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
      <StyledBox>
        <AvatarGroup max={2}>
          <Avatar
            alt="Exanova Technology"
            src="https://media.licdn.com/dms/image/D4E0BAQGntLJZnQi2SA/company-logo_100_100/0/1684266536016?e=1697068800&v=beta&t=DHxp8hA1KCxjcXoFtxupe9F4yGXIoy-OmyFefDSTJ5w"
            sx={{ width: 56, height: 56 }}
          />
          <Avatar
            alt="Edenred"
            src="https://media.licdn.com/dms/image/C4D0BAQHR1lDkZ196lQ/company-logo_100_100/0/1519922007033?e=1697068800&v=beta&t=7fCgHtFnXyEIKvwEgpwUo8GxnuIP81Kvofrt2mo3BQU"
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

      <StyledBox>
        <AvatarGroup max={2}>
          <Avatar
            alt="Deloitte Chile"
            src="https://media.licdn.com/dms/image/C560BAQGNtpblgQpJoQ/company-logo_100_100/0/1662120927694?e=1697068800&v=beta&t=3zWzKwqUoocPo6YUQ0lw87m_WQoWPApSh-BZ-pfKtPI"
            sx={{ width: 56, height: 56 }}
          />
          <Avatar
            alt="Falabella Retail"
            src="https://images.falabella.com/v3/assets/blt7c5c2f2f888a7cc3/bltac3cc69ae7d9a553/610883e7ac7fb61a3678c01a/CardGrid_falabella_retail_dk_ja2.jpg"
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

      <StyledBox>
        <AvatarGroup max={2}>
          <Avatar
            alt="IBM de Chile SAC"
            src="https://media.licdn.com/dms/image/D560BAQGiz5ecgpCtkA/company-logo_100_100/0/1688684715427?e=1697068800&v=beta&t=F_ZqdL__viQJShHtdgDBSv1nPgAcZFoSotLSbsRHMDc"
            sx={{ width: 56, height: 56 }}
          />
          <Avatar
            alt="Itaú Bank"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Banco_Ita%C3%BA_logo.svg/1011px-Banco_Ita%C3%BA_logo.svg.png"
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
    </>
  );
};

export default WorkList;
