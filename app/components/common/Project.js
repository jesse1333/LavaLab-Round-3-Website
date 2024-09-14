import { Box, Typography } from "@mui/material";
import Image from "next/image";
import File from "../../assets/file.svg";

export default function Project({ assignment, lastVisited }) {
  return (
    // Outer Transparent Box
    <Box
      sx={{
        width: "323px",
        height: "297px",
        border: "2px solid #CACACA",
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}>
      {/* Inner Gray Box */}
      <Box
        sx={{
          width: "275px",
          height: "175px",
          borderRadius: "4px",
          backgroundColor: "#D9D9D9",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Image
          src={File}
          alt="File"
          style={{ width: "56.67px", height: "auto" }}
        />
      </Box>

      {/* Text */}
      <Box sx={{ width: 275, paddingTop: 2 }}>
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
