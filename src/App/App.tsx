import React, {useState, useEffect} from "react";

import DarkMode from "../components/DarkMode";
import {Candidate} from "../types/candidate";
import InterviewStep from "../components/InterviewStep";
import api from "../api/index";

import styles from "./App.module.scss";
import Modal from "./../components/Modal";

function App() {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [show, setShow] = useState(false);
  const [theme, setTheme] = React.useState("light");

  useEffect(() => {
    api.candidates.list().then((apicandidates: Candidate[]) => {
      setCandidates(apicandidates);
    });
  }, []);

  return (
    <div
      className={`${styles.container} ${
        theme === "light" ? styles.for_light_theme : styles.for_dark_theme
      }`}
    >
      <InterviewStep
        candidates={candidates}
        setCandidates={setCandidates}
        stepFilter="Entrevista inicial"
        title="Entrevista Inicial"
      >
        <button className={styles.buttoncandidato} onClick={() => setShow(true)}>
          Agregar candidato
        </button>
      </InterviewStep>
      <InterviewStep
        candidates={candidates}
        setCandidates={setCandidates}
        stepFilter="Entrevista técnica"
        title="Entrevista Tecnica"
      />
      <InterviewStep
        candidates={candidates}
        setCandidates={setCandidates}
        stepFilter="Oferta"
        title="Oferta"
      />
      <InterviewStep
        candidates={candidates}
        setCandidates={setCandidates}
        stepFilter="Asignación"
        title="Asignación"
      />
      <InterviewStep
        candidates={candidates}
        setCandidates={setCandidates}
        stepFilter="Rechazo"
        title="Rechazo"
      />

      <Modal
        show={show}
        title="Agregar candidato"
        onClose={() => setShow(false)}
        onSubmit={(candidato: Candidate) => {
          setCandidates([...candidates, candidato]);
          setShow(false);
        }}
      />
      <DarkMode setTheme={setTheme} theme={theme} />
    </div>
  );
}

export default App;
