import React from "react";

import styles from "./InterviewStep.module.scss";
import Candidate from "./Candidate";
import {interviewSteps} from "./../constants/constants";

function InterviewStep({title, candidates, setCandidates, stepFilter, children}: any) {
  function nextInterviewStep(step: any) {
    switch (step) {
      case interviewSteps.entrevistaInicial:
        return "Entrevista técnica";
      case "Entrevista técnica":
        return "Oferta";
      case "Oferta":
        return "Asignacion";
      case "Asignacion":
        return "Rechazo";
    }
  }

  const handleForwardClick = (id: any) => {
    const updatedCandidates = candidates.map((candidate: any) => {
      if (candidate.id === id) {
        return {
          ...candidate,
          step: nextInterviewStep(candidate.step),
        };
      }

      return candidate;
    });

    setCandidates(updatedCandidates);
  };

  const handleBackwardsClick = (id: any) => {
    const updatedCandidates = candidates.map((candidate: any) => {
      if (candidate.id === id) {
        return {
          ...candidate,
          step: previousInterviewStep(candidate.step),
        };
      }

      return candidate;
    });

    setCandidates(updatedCandidates);
  };

  function previousInterviewStep(step: any) {
    switch (step) {
      case interviewSteps.entrevistaTecnica:
        return "Entrevista inicial";
      case "Oferta":
        return "Entrevista técnica";
      case "Asignacion":
        return "Oferta";
      case "Rechazo":
        return "Asignacion";
    }
  }

  return (
    <div className={styles.interviewstep}>
      <h2>{title}</h2>
      {candidates
        .filter((candidate: any) => candidate.step === stepFilter)
        .map((candidate: any) => {
          return (
            <Candidate
              key={candidate.id}
              comments={candidate.comments}
              handleBackwardsClick={handleBackwardsClick}
              handleForwardClick={handleForwardClick}
              id={candidate.id}
              nombre={candidate.name}
              step={candidate.step}
            />
          );
        })}
      {children}
    </div>
  );
}

export default InterviewStep;
