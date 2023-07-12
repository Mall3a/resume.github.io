import * as React from "react";
import LinearProgress, {
  LinearProgressProps,
} from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const ProgressBar = (props: LinearProgressProps & { value: number }) => {
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ width: "100%", mr: 1 }}>
          <LinearProgress
            style={{ height: "13px" }}
            variant="buffer"
            {...props}
            color="success"
          />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2" color="white">{`${Math.round(
            props.value
          )}%`}</Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default ProgressBar;
