import { Box, Typography } from "@mui/material";
import Image from "next/image";
import File from "../../assets/file.svg";

export default function ProjectThin({ assignment, lastVisited }) {
  return (
    // Outer Transparent Box
    <Box
      sx={{
        width: "800px",
        height: "100px",
        border: "2px solid #CACACA",
        borderRadius: "8px",
        display: "flex",
        flexDirection: "row",
        alignItems: "left",
      }}>
      {/* Inner Gray Box */}
      <Box
        sx={{
          width: "100px",
          height: "100px",
          borderRadius: "4px",
          backgroundColor: "#D9D9D9",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Image
          src={File}
          alt="File"
          style={{ width: "30px", height: "auto" }}
        />
      </Box>

      {/* Text */}
      <Box sx={{ width: 275, marginTop: 3.5, marginLeft: 2}}>
        <Typography
          sx={{
            fontWeight: "bold",
            fontFamily: "var(--font-manrope)",
          }}>
          {assignment}
        </Typography>
        <Typography
          sx={{ fontWeight: "light", fontFamily: "var(--font-manrope)" }}>
          {lastVisited}
        </Typography>
      </Box>
    </Box>
  );
}
