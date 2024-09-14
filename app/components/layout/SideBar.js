import * as React from "react";
import { useState } from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import AroIcon from "../../assets/icon.svg";
import AllProjectsButton from "../../assets/all-projects.svg";
import Archived from "../../assets/archived.svg";
import SharedWithYou from "../../assets/shared-with-you.svg";
import Trash from "../../assets/trash.svg";
import YourProjects from "../../assets/your-projects.svg";

export default function SideBar() {
  const buttons = [
    { id: "allProjects", src: AllProjectsButton, label: "All Projects" },
    { id: "yourProjects", src: YourProjects, label: "Your Projects" },
    { id: "sharedWithYou", src: SharedWithYou, label: "Shared with you" },
    { id: "archived", src: Archived, label: "Archived" },
    { id: "trash", src: Trash, label: "Trash" },
  ];

  const [selectedButton, setSelectedButton] = useState(null);

  return (
    <Box display="flex" flexDirection={"column"} alignItems={"center"}>
      <Box
        display="flex"
        justifyContent={"center"}
        gap={0.5}
        paddingTop={10}
        paddingBottom={6}
        marginRight={2.25}>
        <Image src={AroIcon} alt="Aro Icon" width={42.9} height={40.72} />
        <Typography
          className="font-beVietnamPro"
          fontSize={33.05}
          color="#34347B"
          sx={{ lineHeight: 1.2, fontWeight: "bold" }}>
          ARO
        </Typography>
      </Box>

      <Stack gap={1} sx={{ marginRight: 5 }}>
        {buttons.map((button) => (
          <Button
            key={button.id}
            variant="text"
            startIcon={
              <Image
                src={button.src}
                alt={button.label}
                width={20}
                height={20}
              />
            }
            onClick={() => setSelectedButton(button.id)}
            sx={{
              justifyContent: "flex-start",
              color: selectedButton === button.id ? "#34347B" : "#505064",
              textTransform: "none",
              fontWeight: "bold",
              fontFamily: "var(--font-manrope)",
              borderColor:
                selectedButton === button.id ? "primary.main" : "divider",
              backgroundColor:
                selectedButton === button.id
                  ? "rgba(0, 0, 0, 0.1)"
                  : "transparent",
              width: "130%",
              paddingLeft: "40px",
            }}>
            {button.label}
          </Button>
        ))}
      </Stack>

      <Button
        variant="contained"
        sx={{
          position: "absolute",
          bottom: 40,
          width: "80%",
          height: 40,
          backgroundColor: "#34347B",
        }}>
        + New
      </Button>
    </Box>
  );
}
