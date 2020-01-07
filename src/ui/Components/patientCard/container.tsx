import React from "react";
import PatientCardPresenter from "./presenter";
import { Patient } from "../../../state/ducks/patients/types";

export interface PatientCardProps {
  patient: Patient;
}

const PatientCard: React.FC<PatientCardProps> = ({ patient }) => (
  <PatientCardPresenter patient={patient} />
);

export default PatientCard;
