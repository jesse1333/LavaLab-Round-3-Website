"use client";
import * as React from "react";
import { useState } from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Input from "@mui/joy/Input";
import Magnify from "../../assets/magnify.svg";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";

export default function SearchHeader({ onSearch }) {
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchValue);
    setSearchValue("");
  };

  return (
    <Box
      display={"flex"}
      flexDirection={"row"}
      sx={{ gap: 2, borderBottom: "1px solid #CBCBD5" }}
      paddingTop={5}
      paddingLeft={5}
      paddingRight={5}
      paddingBottom={7}>
      {/* Search Input Form */}
      <form onSubmit={handleSubmit} style={{ width: "100%" }}>
        <Input
          variant="outlined"
          placeholder="Search in Aro"
          sx={{
            width: "100%",
            height: 60,
            borderWidth: 1.5,
            borderRadius: "4px",
            borderColor: "#CACACA",
          }}
          startDecorator={<Image src={Magnify} alt="Magnify Icon" />}
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
        />
      </form>

      {/* User Info Card */}
      <Card
        sx={{
          minWidth: 272,
          boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.2)",
        }}>
        <CardHeader
          sx={{
            paddingTop: 1.2,
            paddingBottom: 1.2,
            paddingLeft: 2.5,
            paddingRight: 2.5,
          }}
          avatar={
            <Avatar sx={{ bgcolor: "#414172" }} aria-label="user">
              C
            </Avatar>
          }
          title="Cole Gawin"
          subheader="colegawin@gmail.com"
        />
      </Card>
    </Box>
  );
}
