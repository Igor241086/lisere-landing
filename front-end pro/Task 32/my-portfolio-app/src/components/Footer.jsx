import React from 'react';
import { Container, Typography } from '@mui/material';

const Footer = () => {
  return (
    <footer style={{ marginTop: '20px', padding: '20px 0', backgroundColor: '#f5f5f5' }}>
      <Container>
        <Typography variant="body1">Contacts: example@mail.com</Typography>
        <Typography variant="body2">© 2025 All rights reserved</Typography>
      </Container>
    </footer>
  );
};

export default Footer;