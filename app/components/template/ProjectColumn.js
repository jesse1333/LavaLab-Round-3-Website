import React from "react";
import Grid from "@mui/joy/Grid";
import ProjectThin from "../common/ProjectThin";

export default function ProjectColumn({ searchQuery }) {
  const projects = [
    { assignment: "Assignment 1", lastVisited: "1m ago" },
    { assignment: "Lab 3", lastVisited: "40m ago" },
    { assignment: "Workbook Ch. 3", lastVisited: "2 hrs ago" },
    { assignment: "Worksheet 2", lastVisited: "Apr 25, 2024" },
    { assignment: "Resume", lastVisited: "March 27, 2023" },
    { assignment: "Assignment 3", lastVisited: "Feb 20, 2023" },
  ];

  const filteredProjects = projects.filter((project) =>
    project.assignment.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Grid
      container
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      sx={{ width: "100%", paddingTop: 2 }}>
      {(searchQuery ? filteredProjects : projects).map((project, index) => (
        <Grid key={index} size={6}>
          <ProjectThin
            assignment={project.assignment}
            lastVisited={project.lastVisited}
          />
        </Grid>
      ))}
    </Grid>
  );
}
