import React from "react";
import Card from "../../components/Card";
import Center from "../../components/Center";
import { useGetData } from "../../hooks/useGetData";
import styles from "./styles.module.css";

interface Character {
  id: number;
  name: string;
  species: string;
}

function Home() {
  const { data, error, loading } = useGetData<Character[]>(
    "https://rickandmortyapi.com/api/character"
  );

  return (
    <main>
      <h1>Rick and Morty Characters</h1>
      {loading ? (
        <Center>
          <h2>Loading...</h2>
        </Center>
      ) : error ? (
        <Center>
          <h2>Error: {error}</h2>
        </Center>
      ) : data ? (
        <div className={styles.cardGrid}>
          {data.map((character: { id: React.Key | null | undefined; name: string; species: string; }) => (
            <Card
              key={character.id}
              id={character.id}
              name={character.name}
              species={character.species}
            />
          ))}
        </div>
      ) : (
        <Center>
          <h2>No data available</h2>
        </Center>
      )}
    </main>
  );
}

export default Home;
