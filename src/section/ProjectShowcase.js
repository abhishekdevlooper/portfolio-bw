import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import { projects } from "../utils/data";
import "../styles/projects.css";

const ProjectShowcase = () => {
  return (
    <Grid container spacing={3} className="project-grid">
      {projects.map((project, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card className="project-card">
            <CardContent>
              <Typography variant="h6">{project.name}</Typography>
              <Typography variant="body2">{project.description}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProjectShowcase;
