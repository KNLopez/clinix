import React, { CSSProperties } from "react";
import styles from "./card.module.scss";

export interface CardProps extends CSSProperties {
  children: any;
}

const Card: React.FC<CardProps> = ({
  children,
  display = "block",
  backgroundColor = "#fff",
  ...props
}) => {
  const style: CSSProperties = {
    display,
    backgroundColor,
    ...props,
  };

  return (
    <div style={style} className={styles.card}>
      {children}
    </div>
  );
};

export default Card;
