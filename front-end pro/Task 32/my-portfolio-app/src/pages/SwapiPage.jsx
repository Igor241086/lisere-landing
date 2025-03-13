import { useQuery } from "@tanstack/react-query";
import { Typography, CircularProgress, List, ListItem } from "@mui/material";

const fetchCharacters = async () => {
  const res = await fetch("https://swapi.dev/api/people/");
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
};

export default function SwapiPage() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["swapiCharacters"],
    queryFn: fetchCharacters,
  });

  if (isLoading) return <CircularProgress />;
  if (error) return <Typography color="error">Error: {error.message}</Typography>;

  return (
    <div className="content">
      <Typography variant="h4" gutterBottom>
        Star Wars Characters
      </Typography>
      <List>
        {data.results.map((character) => (
          <ListItem key={character.name}>{character.name}</ListItem>
        ))}
      </List>
    </div>
  );
}
