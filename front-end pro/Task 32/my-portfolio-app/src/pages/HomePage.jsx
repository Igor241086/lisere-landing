import React from 'react';
import { Container, Typography, Grid, Paper } from '@mui/material';
import Resume from '../components/Resume';

const HomePage = () => {
  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        My Resume
      </Typography>

      <Grid container spacing={2} direction="column" alignItems="flex-start">
        <Grid item xs={12}>
          <Resume />
        </Grid>

        <Grid item xs={12}>
          <Paper elevation={3} sx={{ padding: 2, width: '100%', maxWidth: 600 }}>
            <Typography variant="h5">Skills</Typography>
            <ul>
              {[
                'JavaScript (React, Node.js)',
                'HTML, CSS, Sass',
                'Git, GitHub',
                'Working with REST API',
              ].map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
