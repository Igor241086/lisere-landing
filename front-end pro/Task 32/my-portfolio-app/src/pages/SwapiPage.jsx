import React, { useState, useEffect } from 'react';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';

const SwapiPage = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://swapi.dev/api/people/')
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);

  return (
    <Container>
      <Typography variant="h3" gutterBottom>
      Star Wars characters
      </Typography>
      <Grid container spacing={2}>
        {characters.map((character, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6">{character.name}</Typography>
                <Typography>Пол: {character.gender}</Typography>
                <Typography>Рост: {character.height}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default SwapiPage;
