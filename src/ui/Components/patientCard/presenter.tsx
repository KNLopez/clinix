import React from "react";
import { PatientCardProps } from "./container";
import Card from "../card/card";
import styles from "./PatientCard.module.scss";

const PatientCardPresenter: React.FC<PatientCardProps> = ({ patient }) => {
  const {
    name,
    consultationType,
    approved,
    reason,
    image,
    priorityNumber,
  } = patient;
  return (
    <Card display="flex" alignItems="center" justifyContent="space-between">
      <div className={styles.userInfo}>
        <div className={styles.priorityNumber}>
          <h2>{priorityNumber}</h2>
        </div>
        <img src={image} className={styles.patientImage} />
        <div>{name}</div>
      </div>
      <div>{consultationType}</div>
      <div>{reason}</div>
      <div>
        <button>Approve</button>
        <button>Cancel</button>
      </div>
    </Card>
  );
};

export default PatientCardPresenter;
