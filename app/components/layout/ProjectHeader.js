"use client";
import * as React from "react";
import { useState } from "react";
import { Box, Typography, Stack, Button } from "@mui/material";
import Image from "next/image";
import ListView from "../../assets/list-view.svg";
import GridView from "../../assets/grid-view.svg";

export default function ProjectHeader({ viewMode, setViewMode }) {
  const buttons = [
    { id: "listView", src: ListView, mode: 0 },
    { id: "gridView", src: GridView, mode: 1 },
  ];

  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (button) => {
    setSelectedButton(button.id);
    setViewMode(button.mode);
  };

  return (
    <Box display="flex">
      <Typography
        sx={{
          fontSize: 20,
          fontWeight: "bold",
          fontFamily: "var(--font-manrope)",
        }}>
        All&nbsp;Projects
      </Typography>
      <Box width="100%" marginRight="10%">
        {buttons.map((button) => (
          <Button
            key={button.id}
            variant="text"
            onClick={() => handleButtonClick(button)}
            sx={{
              justifyContent: "flex-start",
              textTransform: "none",
              fontWeight: "bold",
              fontFamily: "var(--font-manrope)",
              borderColor:
                selectedButton === button.id ? "primary.main" : "divider",
              color: selectedButton === button.id ? "#34347B" : "#505064",
              backgroundColor:
                selectedButton === button.id
                  ? "rgba(0, 0, 0, 0.1)"
                  : "transparent",
              float: "right",
              minWidth: 0,
            }}>
            <Image src={button.src} alt={button.label} width={20} height={20} />
          </Button>
        ))}
      </Box>
    </Box>
  );
}
