"use client";
import * as React from "react";
import { useState } from "react";
import { Box } from "@mui/material";
import SideBar from "./components/layout/SideBar";
import SearchHeader from "./components/layout/SearchHeader";
import ProjectHeader from "./components/layout/ProjectHeader";
import ProjectGrid from "./components/template/ProjectGrid";
import ProjectColumn from "./components/template/ProjectColumn";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState(true);

  return (
    <Box>
      {/* Side Bar */}
      <div
        style={{
          width: "300px",
          borderRight: "1px solid #CBCBD5",
          background: "#EDEDED",
          height: "100vh",
          position: "fixed",
        }}>
        <SideBar />
      </div>

      {/* Main Content Area */}
      <div style={{ marginLeft: "300px", flex: 1 }}>
        {/* Search Header */}
        <SearchHeader onSearch={setSearchQuery} />

        {/* All Projects */}
        <Box container sx={{ paddingTop: 5, paddingLeft: 5 }}>
          <ProjectHeader
            viewMode={viewMode}
            setViewMode={setViewMode}></ProjectHeader>
          {viewMode ? (
            <ProjectGrid searchQuery={searchQuery} />
          ) : (
            <ProjectColumn searchQuery={searchQuery} />
          )}
        </Box>
      </div>
    </Box>
  );
}
