import React from "react";
import { ThemeProvider as EmotionThemeProvider } from "emotion-theming";
import { ThemeProvider as StyledComponentThemeProvider } from "styled-components";
import Chart from "./chart";
import CssModuleChart from "./css-modules";
import StyledComponentsChart from "./styled-components";
import EmotionChart from "./emotion";
import "./App.css";

const theme = {
  base: "black"
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>VVT CSS experimentation</h1>
        <h2>Unstyled</h2>
        <p>This is the base chart used in these examples</p>
        <Chart
          margin={{ left: 70, right: 70, top: 20, bottom: 60 }}
          width={window.innerWidth}
          height={window.innerHeight / 2}
        />
        <h2>CSS modules</h2>
        <p>These import CSS modules via Webpack's css-loader</p>
        <CssModuleChart />

        <h2>Styled Components</h2>
        <p>These use a HOC template tag to wrap components:</p>
        <pre style={{ textAlign: "left" }}>
          {`
const Styled = styled(Chart)\`
  text {
    fill: pink;
  }

  /* Themes can be integrated as such */
  rect {
    fill: \${props => props.theme.base};
  }
\`;
        `}
        </pre>
        <StyledComponentThemeProvider theme={theme}>
          <StyledComponentsChart />
        </StyledComponentThemeProvider>

        <h2>Emotion</h2>
        <p>These use a combination of template tags and custom attributes:</p>
        <pre style={{ textAlign: "left" }}>
          {`
  <Chart
    css={props =>
      css\`
        text {
          fill: green;
        }
        rect {
          fill: \${props.base}; /* This comes from top-level theme */
        }
      \`
    }
    margin={{ left: 70, right: 70, top: 20, bottom: 60 }}
    width={window.innerWidth}
    height={window.innerHeight / 2}
    className={"emotion-chart"}
    {...props}
  />
`}
        </pre>
        <EmotionThemeProvider theme={theme}>
          <EmotionChart />
        </EmotionThemeProvider>
      </header>
    </div>
  );
}

export default App;
