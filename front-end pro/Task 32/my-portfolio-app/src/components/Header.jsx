import React from 'react';
import { AppBar, Toolbar, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Container>
          <Button component={Link} to="/" color="inherit">
            Home
          </Button>
          <Button component={Link} to="/todo" color="inherit">
            TODO
          </Button>
          <Button component={Link} to="/swapi" color="inherit">
            SWAPI
          </Button>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;