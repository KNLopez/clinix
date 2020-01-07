import React, { ReactNode } from "react";
import PatientCard from "../Components/patientCard/container";
import { Patient } from "../../state/ducks/patients/types";
import styles from "./Dashboard.module.scss";
import Card from "../Components/card/card";

export interface DashBoardPresenterProps {
  patients: Patient[];
}

const DashboardPresenter: React.FC<DashBoardPresenterProps> = ({
  patients,
}) => {
  const patientRenderer = (): ReactNode => {
    return patients.map(patient => <PatientCard patient={patient} />);
  };

  return (
    <div className={styles.dashboard}>
      <div>Patient Count</div>
      <Card>
        <h2> 250</h2>
      </Card>

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
