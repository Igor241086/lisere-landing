import React from 'react';
import { Paper, Typography } from '@mui/material';

const Resume = () => {
  return (
    <Paper elevation={3} sx={{ padding: 2 }}>
      <Typography variant="h5">Information about me</Typography>
      <Typography variant="body1">Description of skills and experience.</Typography>
    </Paper>
  );
};

export default Resume;
