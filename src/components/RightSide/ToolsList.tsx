import {
  faArrowRight,
  faAtom,
  faChartBar,
  faCheck,
  faClock,
  faCode,
  faCogs,
  faComputer,
  faDatabase,
  faMicroscope,
  faPalette,
  faRainbow,
  faRefresh,
  faSearch,
  faSearchMinus,
  faSync,
  faTasks,
  faGlobe,
  faCube,
  faCodeBranch,
  faLeaf,
  faCoffee,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Chip, Stack } from "@mui/material";
import React from "react";

const ToolsList = () => {
  return (
    <Stack direction="row" spacing={1} flexWrap={"wrap"} gap={2}>
      {/* Core */}
      <Chip
        label="React"
        color="primary"
        icon={<FontAwesomeIcon icon={faAtom} />}
      />
      <Chip
        label="TypeScript"
        color="primary"
        icon={<FontAwesomeIcon icon={faCode} />}
      />
      <Chip
        label="JavaScript"
        color="primary"
        icon={<FontAwesomeIcon icon={faCode} />}
      />

      {/* UI / Styling */}
      <Chip
        label="Material-UI"
        color="info"
        icon={<FontAwesomeIcon icon={faPalette} />}
      />
      <Chip
        label="TailwindCSS"
        color="info"
        icon={<FontAwesomeIcon icon={faPalette} />}
      />
      <Chip
        label="Sass"
        color="primary"
        icon={<FontAwesomeIcon icon={faPalette} />}
      />
      <Chip
        label="Styled-components"
        color="primary"
        icon={<FontAwesomeIcon icon={faPalette} />}
      />

      {/* State / Data */}
      <Chip
        label="Redux"
        color="success"
        icon={<FontAwesomeIcon icon={faSync} />}
      />
      <Chip
        label="Redux Toolkit"
        color="secondary"
        icon={<FontAwesomeIcon icon={faSync} />}
      />
      <Chip
        label="Zustand"
        color="primary"
        icon={<FontAwesomeIcon icon={faCube} />}
      />
      <Chip
        label="React Query"
        color="primary"
        icon={<FontAwesomeIcon icon={faDatabase} />}
      />

      {/* Routing */}
      <Chip
        label="React Router"
        color="secondary"
        icon={<FontAwesomeIcon icon={faArrowRight} />}
      />

      {/* Build */}
      <Chip
        label="Vite"
        color="secondary"
        icon={<FontAwesomeIcon icon={faGlobe} />}
      />

      {/* Testing */}
      <Chip
        label="Jest"
        color="info"
        icon={<FontAwesomeIcon icon={faCheck} />}
      />
      <Chip
        label="Cypress.io"
        color="info"
        icon={<FontAwesomeIcon icon={faSearch} />}
      />
      <Chip
        label="React Testing Library"
        color="error"
        icon={<FontAwesomeIcon icon={faSearchMinus} />}
      />

      {/* APIs */}
      <Chip
        label="REST API"
        color="success"
        icon={<FontAwesomeIcon icon={faRefresh} />}
      />
      <Chip
        label="Axios"
        color="warning"
        icon={<FontAwesomeIcon icon={faDatabase} />}
      />
      <Chip
        label="GraphQL"
        color="error"
        icon={<FontAwesomeIcon icon={faCogs} />}
      />
      <Chip
        label="Apollo Client"
        color="primary"
        icon={<FontAwesomeIcon icon={faCogs} />}
      />

      {false && (
        <>
          {/* Backend */}
          <Chip
            label="Node.js"
            color="success"
            icon={<FontAwesomeIcon icon={faGlobe} />}
          />
          <Chip
            label="Express"
            color="success"
            icon={<FontAwesomeIcon icon={faCogs} />}
          />
        </>
      )}

      {/* Tools */}
      <Chip
        label="Storybook"
        color="primary"
        icon={<FontAwesomeIcon icon={faCode} />}
      />
      <Chip
        label="Jira"
        color="success"
        icon={<FontAwesomeIcon icon={faTasks} />}
      />
      <Chip
        label="Git"
        color="secondary"
        icon={<FontAwesomeIcon icon={faCodeBranch} />}
      />
      <Chip
        label="GitHub"
        color="secondary"
        icon={<FontAwesomeIcon icon={faCodeBranch} />}
      />

      {/* Design */}
      <Chip
        label="Figma"
        color="info"
        icon={<FontAwesomeIcon icon={faPalette} />}
      />

      {/* Frameworks */}
      {false && (
        <Chip
          label="Next.js"
          color="info"
          icon={<FontAwesomeIcon icon={faArrowRight} />}
        />
      )}

      {/* Java Backend */}
      <Chip
        label="Java"
        color="primary"
        icon={<FontAwesomeIcon icon={faCoffee} />}
      />
      <Chip
        label="Spring Boot"
        color="success"
        icon={<FontAwesomeIcon icon={faLeaf} />}
      />
    </Stack>
  );
};

export default ToolsList;
