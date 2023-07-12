import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { List, ListItem, ListItemText, ListSubheader } from "@mui/material";

interface Props {
  title: string;
  content: string[];
}

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
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <Typography sx={{ width: "33%", flexShrink: 0 }}>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          <List>
            <li>
              <ul>
                {content.map((item, id) => (
                  <ListItem key={`${id}`}>
                    <ListItemText primary={`${item}`} />
                  </ListItem>
                ))}
              </ul>
            </li>
          </List>
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default ControlledAccordions;
