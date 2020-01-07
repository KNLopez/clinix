import React from "react";
import styles from "./card.module.scss";

export interface CardProps {
  children: any;
  display?: string;
  justifyContent?: string;
  alignItems?: string;
}

const Card: React.FC<CardProps> = ({
  children,
  display = "block",
  justifyContent = "inherit",
  alignItems = "inherit",
}) => (
  <div style={{ display, justifyContent, alignItems }} className={styles.card}>
    {children}
  </div>
);

export default Card;
