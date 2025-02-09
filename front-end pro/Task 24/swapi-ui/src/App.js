import React from "react";

const CharacterCard = () => {
  const character = {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    hair_color: "blond",
    skin_color: "fair",
    eye_color: "blue",
    birth_year: "19BBY",
    gender: "male",
    vehicles: ["Speeder Bike", "Imperial Speeder"],
    starships: ["X-Wing", "Imperial Shuttle"],
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">SWAPI Character Info</h1>
      <div className="card shadow-lg p-3">
        <div className="card-body">
          <h3>{character.name}</h3>
          <p><strong>Height:</strong> {character.height} cm</p>
          <p><strong>Mass:</strong> {character.mass} kg</p>
          <p><strong>Hair Color:</strong> {character.hair_color}</p>
          <p><strong>Skin Color:</strong> {character.skin_color}</p>
          <p><strong>Eye Color:</strong> {character.eye_color}</p>
          <p><strong>Birth Year:</strong> {character.birth_year}</p>
          <p><strong>Gender:</strong> {character.gender}</p>
          <h5>Vehicles</h5>
          <ul>
            {character.vehicles.map((vehicle, index) => (
              <li key={index}>{vehicle}</li>
            ))}
          </ul>
          <h5>Starships</h5>
          <ul>
            {character.starships.map((starship, index) => (
              <li key={index}>{starship}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;