import {
  faArrowRight,
  faAtom,
  faChartBar,
  faCheck,
  faCheckCircle,
  faClock,
  faCode,
  faCodeBranch,
  faCogs,
  faComputer,
  faCube,
  faDatabase,
  faGlobe,
  faLightbulb,
  faMicroscope,
  faPalette,
  faRainbow,
  faRefresh,
  faRobot,
  faSearch,
  faSearchMinus,
  faSpellCheck,
  faSync,
  faTasks,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Chip, Stack } from "@mui/material";
import React from "react";

const ToolsList = () => {
  return (
    <Stack direction="row" spacing={1} flexWrap={"wrap"} gap={2}>
      <Chip
        label="Storybook"
        color="primary"
        icon={
          <FontAwesomeIcon icon={faCode} aria-hidden="true"></FontAwesomeIcon>
        }
      />
      <Chip
        label="Jira"
        color="success"
        icon={
          <FontAwesomeIcon icon={faTasks} aria-hidden="true"></FontAwesomeIcon>
        }
      />
      <Chip
        label="Bootstrap"
        color="secondary"
        icon={
          <FontAwesomeIcon
            icon={faRainbow}
            aria-hidden="true"
          ></FontAwesomeIcon>
        }
      />

      <Chip
        label="Axios"
        color="warning"
        icon={
          <FontAwesomeIcon
            icon={faDatabase}
            aria-hidden="true"
          ></FontAwesomeIcon>
        }
      />
      <Chip
        label="Agile Development"
        color="warning"
        icon={
          <FontAwesomeIcon
            icon={faComputer}
            aria-hidden="true"
          ></FontAwesomeIcon>
        }
      />
      <Chip
        label="Moment.js"
        color="secondary"
        icon={
          <FontAwesomeIcon icon={faClock} aria-hidden="true"></FontAwesomeIcon>
        }
      />
      <Chip
        label="Cypress.io"
        color="info"
        icon={
          <FontAwesomeIcon icon={faSearch} aria-hidden="true"></FontAwesomeIcon>
        }
      />
      <Chip
        label="Material-UI"
        color="info"
        icon={
          <FontAwesomeIcon icon={faSearch} aria-hidden="true"></FontAwesomeIcon>
        }
      />
      <Chip
        label="Prettier"
        color="warning"
        icon={
          <FontAwesomeIcon icon={faCode} aria-hidden="true"></FontAwesomeIcon>
        }
      />
      <Chip
        label="Jest"
        color="info"
        icon={
          <FontAwesomeIcon icon={faCheck} aria-hidden="true"></FontAwesomeIcon>
        }
      />
      <Chip
        label="GraphQL"
        color="error"
        icon={
          <FontAwesomeIcon icon={faCogs} aria-hidden="true"></FontAwesomeIcon>
        }
      />
      <Chip
        label="ESLint"
        color="primary"
        icon={
          <FontAwesomeIcon
            icon={faCheckCircle}
            aria-hidden="true"
          ></FontAwesomeIcon>
        }
      />
      <Chip
        label="Enzyme"
        color="secondary"
        icon={
          <FontAwesomeIcon
            icon={faMicroscope}
            aria-hidden="true"
          ></FontAwesomeIcon>
        }
      />
      <Chip
        label="Lodash"
        color="success"
        icon={
          <FontAwesomeIcon icon={faCogs} aria-hidden="true"></FontAwesomeIcon>
        }
      />
      <Chip
        label="Chart.js"
        color="primary"
        icon={
          <FontAwesomeIcon
            icon={faChartBar}
            aria-hidden="true"
          ></FontAwesomeIcon>
        }
      />
      <Chip
        label="Three.js"
        color="warning"
        icon={
          <FontAwesomeIcon icon={faCube} aria-hidden="true"></FontAwesomeIcon>
        }
      />
      <Chip
        label="Backbone.js"
        color="secondary"
        icon={
          <FontAwesomeIcon
            icon={faCodeBranch}
            aria-hidden="true"
          ></FontAwesomeIcon>
        }
      />
      <Chip
        label="Next.js"
        color="info"
        icon={
          <FontAwesomeIcon
            icon={faArrowRight}
            aria-hidden="true"
          ></FontAwesomeIcon>
        }
      />
      <Chip
        label="Redux"
        color="success"
        icon={
          <FontAwesomeIcon icon={faSync} aria-hidden="true"></FontAwesomeIcon>
        }
      />
      <Chip
        label="Sass"
        color="primary"
        icon={
          <FontAwesomeIcon
            icon={faPalette}
            aria-hidden="true"
          ></FontAwesomeIcon>
        }
      />
      <Chip
        label="MobX"
        color="primary"
        icon={
          <FontAwesomeIcon icon={faAtom} aria-hidden="true"></FontAwesomeIcon>
        }
      />
      <Chip
        label="React Testing Library"
        color="error"
        icon={
          <FontAwesomeIcon
            icon={faSearchMinus}
            aria-hidden="true"
          ></FontAwesomeIcon>
        }
      />
      <Chip
        label="BluePrism"
        color="secondary"
        icon={
          <FontAwesomeIcon icon={faRobot} aria-hidden="true"></FontAwesomeIcon>
        }
      />
      <Chip
        label="Postman"
        color="warning"
        icon={
          <FontAwesomeIcon icon={faCode} aria-hidden="true"></FontAwesomeIcon>
        }
      />
      <Chip
        label="REST API"
        color="success"
        icon={
          <FontAwesomeIcon
            icon={faRefresh}
            aria-hidden="true"
          ></FontAwesomeIcon>
        }
      />
      <Chip
        label="Figma"
        color="info"
        icon={
          <FontAwesomeIcon
            icon={faPalette}
            aria-hidden="true"
          ></FontAwesomeIcon>
        }
      />
      <Chip
        label="Spring Boot"
        color="primary"
        icon={
          <FontAwesomeIcon icon={faAtom} aria-hidden="true"></FontAwesomeIcon>
        }
      />
    </Stack>
  );
};

export default ToolsList;
