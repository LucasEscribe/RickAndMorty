import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext";

const NavBar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav>
      <ul>
        <li>
          <Link to="/personajes">Personajes</Link>
        </li>
        <li>
          <Link to="/ubicaciones">Ubicaciones</Link>
        </li>
        <li>
          <Link to="/episodios">Episodios</Link>
        </li>
      </ul>
      <p onClick={toggleTheme}>{theme === "light" ? "🌙" : "☀️"}</p>
    </nav>
  );
};

export default NavBar;
