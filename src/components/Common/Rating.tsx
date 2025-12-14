import * as React from "react";
import Box from "@mui/material/Box";

const levels: { [key: number]: string } = {
  0.5: "Basic",
  1: "Basic",
  1.5: "Intermediate",
  2: "Intermediate",
  2.5: "Intermediate",
  3: "Advanced",
  3.5: "Advanced",
  4: "Advanced",
  4.5: "Advanced",
  5: "Advanced",
};

export default function RatingComponent(props: {
  placeholder?: string;
  value: number;
}) {
  const { placeholder, value } = props;

  const getBg = (i: number) => {
    if (value >= i) return "#faaf03";
    if (value >= i - 0.5)
      return "linear-gradient(90deg, #faaf03 50%, #2d3660 50%)";
    return "#2d3660";
  };

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "100px 1fr auto",
        alignItems: "center",
        gap: 1.5,
      }}
    >
      <span>{placeholder}</span>

      <Box sx={{ display: "flex", gap: 1 }}>
        {[1, 2, 3, 4, 5].map((i) => (
          <Box
            key={i}
            sx={{
              width: 15,
              height: 15,
              borderRadius: "50%",
              background: getBg(i),
            }}
          />
        ))}
      </Box>

      <Box sx={{ fontSize: 15, color: "white" }}>{levels[value]}</Box>
    </Box>
  );
}
