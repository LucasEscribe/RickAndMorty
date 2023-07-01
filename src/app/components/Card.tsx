import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

type CardProps = {
  name: string;
  species: string;
  id: number;
};

function Card(props: CardProps) {
  return (
    <div className={styles.container}>
      <h2>{props.name}</h2>
      <p>{props.species}</p>
      <Link to={`/personajes/${props.id}`}>Ver más información</Link>
    </div>
  );
}

export default Card;
