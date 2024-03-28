import React from "react";

import {StepType} from "../types/candidate";

import styles from "./Candidate.module.scss";

interface CandidateProps {
  id: string;
  nombre: string;
  comments: string;
  step: StepType;
  handleForwardClick: (id: string) => void;
  handleBackwardsClick: (id: string) => void;
}

function Candidate({
  id,
  nombre,
  comments,
  step,
  handleForwardClick,
  handleBackwardsClick,
}: CandidateProps) {
  return (
    <div className={styles.candidatewrapper}>
      <div className={styles.candidateinfo}>
        {nombre}
        <span>{comments}</span>
      </div>
      <div>
        <button disabled={step === "Entrevista inicial"} onClick={() => handleBackwardsClick(id)}>
          {"<"}
        </button>
        <button disabled={step === "Rechazo"} onClick={() => handleForwardClick(id)}>
          {">"}
        </button>
      </div>
    </div>
  );
}

export default Candidate;
