import React from "react";
import styles from "./metricCard.module.scss";

type Props = {
  label: string;
  data: string | number;
  backgroundColor: string;
  unit?: string;
  cardSize: string;
};

function index({ label, data, backgroundColor, cardSize, unit }: Props) {
  return (
    <div
      className={`${styles.wrapper} ${styles.wrapper}_${backgroundColor} ${styles.wrapper}_${cardSize}`}
    >
      <h3>{label}</h3>
      <p>
        {data}
        {unit}
      </p>
    </div>
  );
}

export default index;
