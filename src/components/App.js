import React, { useState } from 'react';
import Navbar from "./Navbar";
import Article from "./Article";
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import articles from "../articles";

const themes = {
  white: {
    primary: "#08090a",
    secondary: "#f9fafa",
    tertiary: "#fff",
    quaternary: "#3b49df",
    background: "#fff",
    hightlight: "rgba(0,0,0, 0.2)",
    border: "rgba(0,0,0,0.1)"
  },
  black: {
    primary: "#aaa",
    secondary: "#0d1219",
    tertiary: "#1a2634",
    quaternary: "#26d9ca",
    background: "rgba(255,255,255, 0.1)",
    hightlight: "rgba(255,255,255, 0.2)",
    border: "inherit"
  }
}

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body, html, #root {
    height: 100%;
  }

  body {
    font-family: sans-serif;
    margin: 0;
    background-color: ${props => props.theme.secondary};
  }
`

const Container = styled.main`
  width: 920px;
  margin: 24px auto;
  border-radius: 4px;
  padding: 8px 24px;
  font-family: sans-serif;
  background-color: ${props => props.theme.background};

  @media (max-width: 968px) {
    width: 768px;
  }

  @media (max-width: 816px) {
    width: 512px;
  }

  @media (max-width: 560px) {
    width: 95%;
  }
`;

export default () => {
  const [theme, setTheme] = useState('white');
  const invertTheme = () => theme === "white" ? setTheme("black") : setTheme("white");

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyle />
      <Navbar invertTheme={invertTheme} />
      <Container>
        {articles.map((data, key) => (
          <Article {...data} key={key}></Article>
        ))}
      </Container>
    </ThemeProvider>
  )
};

