import React, { ReactNode } from "react";
import PatientCard from "../Components/patientCard/container";
import { Patient } from "../../state/ducks/patients/types";
import styles from "./Dashboard.module.scss";
import Card from "../Components/card/card";
import { useSelector } from "react-redux";
import { authSelectors } from "../../state/ducks/auth";
import DashboardStats from "./stats/stats";

export interface DashBoardPresenterProps {
  patients: Patient[];
}

const DashboardPresenter: React.FC<DashBoardPresenterProps> = ({
  patients,
}) => {
  const patientRenderer = (): ReactNode => {
    return patients.map(patient => <PatientCard patient={patient} />);
  };

  const { name } = useSelector(authSelectors.currentUserDetails);
  const appointmentCount = patients.length;
  return (
    <div className={styles.dashboard}>
      <DashboardStats name={name} appointmentCount={appointmentCount} />
      <div className={styles.appointmentsToday}>
        <p>Today</p>
        <div className={styles.patientCards}>
          {patients && patientRenderer()}
        </div>
      </div>
    </div>
  );
};
export default DashboardPresenter;
