import React from "react";
import { Patient } from "../../state/ducks/patients/types";
import DashboardPresenter from "./presenter";

const DashboardContainer = () => {
  const patients: Patient[] = [
    {
      id: "123123",
      priorityNumber: 1,
      image: "https://i.pravatar.cc/60",
      name: "Rico Blanco",
      consultationType: "clinic",
      approved: false,
      reason: "Chronic Cough",
    },
    {
      id: "123123",
      priorityNumber: 2,
      image: "https://i.pravatar.cc/61",
      name: "Chito Miranda",
      consultationType: "clinic",
      approved: false,
      reason: "Chronic Cough",
    },
    {
      id: "123123",
      priorityNumber: 3,
      image: "https://i.pravatar.cc/62",
      name: "Ben and Ben",
      consultationType: "clinic",
      approved: false,
      reason: "Chronic Cough",
    },
  ];

  return <DashboardPresenter patients={patients} />;
};
export default DashboardContainer;
