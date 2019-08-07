/** @jsx jsx */
/**
 * @file
 * Chart theming using Emotion
 */

import Chart from "../chart";
import { css, jsx } from "@emotion/core";

export default ({ ...props }) => (
  <Chart
    css={props =>
      css`
        text {
          fill: green;
        }
        rect {
          fill: ${props.base}; /* This comes from top-level theme */
        }
      `
    }
    margin={{ left: 70, right: 70, top: 20, bottom: 60 }}
    width={window.innerWidth}
    height={window.innerHeight / 2}
    className={"emotion-chart"}
    {...props}
  />
);
