import React, {useState, useEffect} from "react";

import logo from "../assets/logo.png";
import InterviewStep from "../components/InterviewStep";
import api from "../api/index";

import styles from "./App.module.scss";
import {interviewSteps} from "./../constants/constants";
import Modal from "./../components/Modal";

function App() {
  const [candidates, setCandidates] = useState<any>([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    api.candidates.list().then((apicandidates: any) => {
      setCandidates(apicandidates);
    });
  }, []);

  return (
    <div className={styles.container}>
      <InterviewStep
        candidates={candidates}
        setCandidates={setCandidates}
        stepFilter={interviewSteps.entrevistaInicial}
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
        stepFilter="Asignacion"
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
        onSubmit={(candidato: any) => {
          setCandidates([...candidates, candidato]);
          setShow(false);
        }}
      />
    </div>
  );
}

export default App;
