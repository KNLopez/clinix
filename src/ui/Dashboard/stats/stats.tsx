import React from "react";
import styles from "../Dashboard.module.scss";
import Card from "../../Components/card/card";

export interface DashboardStatsProps {
  name: string;
  appointmentCount: number;
}

const DashboardStats: React.FC<DashboardStatsProps> = ({
  name,
  appointmentCount,
}) => (
  <div className={styles.stats}>
    <p>
      Good day <span className={styles.name}>{name}</span>
    </p>

    <Card
      display="inline-block"
      justifyContent="center"
      alignItems="center"
      backgroundColor="#0C479D"
      color="white"
      textAlign="center"
      padding="20px 40px"
      borderRadius="10px">
      <h1>{appointmentCount}</h1>
      <p>Appointments Today</p>
    </Card>
  </div>
);

export default DashboardStats;
