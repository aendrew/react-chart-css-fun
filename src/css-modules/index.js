/**
 * @file
 * Demo theming using CSS modules imported via Webpack
 */
import React from "react";
import Chart from "../chart";
import styles from "./styles.module.css";

export default ({ ...props }) => (
  <Chart
    cssMod
    margin={{ left: 70, right: 70, top: 20, bottom: 60 }}
    width={window.innerWidth}
    height={window.innerHeight / 2}
    className={styles.chart}
    {...props}
  />
);
