/** @jsx jsx */
/**
 * @file
 * Chart theming using Emotion
 */

import Chart from "../chart";
import { css, jsx } from "@emotion/core";

export default ({ ...props }) => (
  <Chart
    css={css`
      text {
        fill: green;
      }
    `}
    margin={{ left: 70, right: 70, top: 20, bottom: 60 }}
    width={window.innerWidth}
    height={window.innerHeight / 2}
    className={"emotion-chart"}
    {...props}
  />
);
