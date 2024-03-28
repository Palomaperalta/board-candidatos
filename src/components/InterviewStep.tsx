import React, {ReactNode} from "react";

import {Candidate as CandidateType, StepType} from "../types/candidate";

import styles from "./InterviewStep.module.scss";
import Candidate from "./Candidate";

interface InterviewStepProps {
  title: string;
  candidates: CandidateType[];
  setCandidates: React.Dispatch<React.SetStateAction<CandidateType[]>>;
  stepFilter: StepType;
  children?: ReactNode;
}

function InterviewStep({
  title,
  candidates,
  setCandidates,
  stepFilter,
  children,
}: InterviewStepProps) {
  function nextInterviewStep(step: StepType) {
    switch (step) {
      case "Entrevista inicial":
        return "Entrevista técnica";
      case "Entrevista técnica":
        return "Oferta";
      case "Oferta":
        return "Asignación";
      case "Asignación":
        return "Rechazo";
      default:
        return "Entrevista inicial";
    }
  }

  const handleForwardClick = (id: string) => {
    const updatedCandidates = candidates.map((candidate: CandidateType) => {
      if (candidate.id === id) {
        return {
          ...candidate,
          step: nextInterviewStep(candidate.step) as StepType,
        };
      }

      return candidate;
    });

    setCandidates(updatedCandidates);
  };

  const handleBackwardsClick = (id: string) => {
    const updatedCandidates = candidates.map((candidate: CandidateType) => {
      if (candidate.id === id) {
        return {
          ...candidate,
          step: previousInterviewStep(candidate.step) as StepType,
        };
      }

      return candidate;
    });

    setCandidates(updatedCandidates);
  };

  function previousInterviewStep(step: StepType) {
    switch (step) {
      case "Entrevista técnica":
        return "Entrevista inicial";
      case "Oferta":
        return "Entrevista técnica";
      case "Asignación":
        return "Oferta";
      case "Rechazo":
        return "Asignación";
      default:
        return "Entrevista inicial";
    }
  }

  return (
    <div className={styles.interviewstep}>
      <h2>{title}</h2>
      {candidates
        .filter((candidate: CandidateType) => candidate.step === stepFilter)
        .map((candidate: CandidateType) => {
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
