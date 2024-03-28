import React, {ReactNode} from "react";
import {useState} from "react";

import {Candidate} from "../types/candidate";

import styles from "./Modal.module.scss";

interface ModalProps {
  show: boolean;
  onClose: () => void;
  onSubmit: (candidato: Candidate) => void;
  title: string;
  children?: ReactNode;
}

const Modal = ({show, onClose, onSubmit, title, children}: ModalProps) => {
  const [username, setUsername] = useState("");
  const [comments, setComments] = useState("");

  const handleSubmit = () => {
    onSubmit({
      id: username.toLowerCase(),
      name: username,
      step: "Entrevista inicial",
      comments: comments,
    });
  };

  if (!show) {
    return null;
  }

  return (
    <div className={styles.modal} onClick={onClose}>
      <div className={styles.modalcontent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalheader}>
          <h4 className={styles.modaltitle}>{title}</h4>
        </div>
        <div className={styles.modalbody}>
          {children}
          <form className={styles.formcandidato} onSubmit={handleSubmit}>
            <label className={styles.namecandidato} htmlFor="name">
              Candidato
            </label>
            <input
              className={styles.inputcandidato}
              id="name"
              placeholder="Ingrese el nombre del candidato"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <label className={styles.namecandidato} htmlFor="comments">
              Comentarios
            </label>
            <input
              className={styles.inputcandidato}
              id="comments"
              placeholder="Ingrese comentarios"
              type="textarea"
              value={comments}
              onChange={(e) => setComments(e.target.value)}
            />
          </form>
        </div>
        <div className={styles.modalfooter}>
          <button className={styles.buttonclose} onClick={onClose}>
            Close
          </button>
          <button className={styles.buttonagregar} onClick={handleSubmit}>
            Agregar candidato
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
