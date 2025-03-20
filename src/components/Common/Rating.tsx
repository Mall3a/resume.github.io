import * as React from "react";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";

const labels: { [index: string]: string } = {
  0.5: "Basic",
  1: "Basic",
  1.5: "Intermediate",
  2: "Intermediate",
  2.5: "Intermediate",
  3: "Advanced",
  3.5: "Advanced",
  4: "Expert",
  4.5: "Expert",
  5: "Expert",
};

function getLabelText(value: number) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}

export default function RatingComponent(props: {
  placeholder: string | undefined;
  value: number | null;
}) {
  const { value } = props;

  return (
    <>
      <span>{props.placeholder}</span>
      <Box
        sx={{
          width: 200,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Rating
          name="feedback"
          value={value}
          precision={0.5}
          getLabelText={getLabelText}
          readOnly
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />
        {value !== null && <Box sx={{ ml: 2 }}>{labels[value]}</Box>}
      </Box>
    </>
  );
}
