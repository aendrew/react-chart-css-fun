/**
 * @file
 * Example of theming using Styled Components
 */
import React from "react";
import Chart from "../chart";
import styled from "styled-components";

const Styled = styled(Chart)`
  text {
    fill: pink;
  }

  rect {
    fill: ${props => props.theme.base};
  }
`;

export default ({ ...props }) => (
  <Styled
    margin={{ left: 70, right: 70, top: 20, bottom: 60 }}
    width={window.innerWidth}
    height={window.innerHeight / 2}
    className={"styled-chart"}
    {...props}
  />
);
