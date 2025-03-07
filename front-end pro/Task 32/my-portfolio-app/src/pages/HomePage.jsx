import React from 'react';
import { Container, Typography, Grid, Paper } from '@mui/material';
import Resume from '../components/Resume';

const HomePage = () => {
  return (
    <Container>
      <Typography variant="h3" gutterBottom>
      My Resume
      </Typography>
      <Resume />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} padding={2}>
            <Typography variant="h5">Skills</Typography>
            <ul>
              <li>JavaScript (React, Node.js)</li>
              <li>HTML, CSS, Sass</li>
              <li>Git, GitHub</li>
              <li>Работа с REST API</li>
            </ul>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
