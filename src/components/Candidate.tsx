import React from "react";

import styles from "./Candidate.module.scss";

function Candidate({id, nombre, comments, step, handleForwardClick, handleBackwardsClick}: any) {
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
