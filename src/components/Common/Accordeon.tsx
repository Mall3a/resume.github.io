import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styled from "styled-components";

interface Props {
  title?: string;
  content: string[];
}

const Container = styled.div`
  margin-left: 20px;
  margin-right: 20px;
`;

const StyledItemList = styled.li`
  margin-top: 10px;

  margin-bottom: 10px;
`;
const ControlledAccordions = ({ title, content }: Props) => {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Accordion
      expanded={expanded === "panel1"}
      onChange={handleChange("panel1")}
    >
      {title && (
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <span>{title}</span>
        </AccordionSummary>
      )}
      <AccordionDetails>
        <Container>
          <ul>
            {content.map((item, id) => (
              <StyledItemList key={`${id}`}>
                <span>{item} </span>
              </StyledItemList>
            ))}
          </ul>
        </Container>
      </AccordionDetails>
    </Accordion>
  );
};

export default ControlledAccordions;
