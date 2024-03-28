import React from "react";

import styles from "../components/DarkMode.module.scss";
import {ThemeType} from "../types/candidate";

interface DarkModeProps {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<ThemeType>>;
}

function DarkMode({theme, setTheme}: DarkModeProps) {
  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTheme(e.target.checked ? "dark" : "light");
  }

  return (
    <div className="container-darkmode">
      <span className={styles.change}>Change Theme </span>
      <label className="switch">
        <input checked={theme === "dark"} type="checkbox" onChange={handleOnChange} />
        <span className="slider" />
      </label>
    </div>
  );
}

export default DarkMode;
