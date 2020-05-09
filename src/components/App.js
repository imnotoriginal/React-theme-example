import React, { useState } from 'react';
import Navbar from "./Navbar";
import Article from "./Article";
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

const articles = [
  {
    title: "How to flat array",
    text: "example text",
    example: "const flatArray = arr => arr.reduce((a, c) => c instanceof Array ? a.concat(flatArray(c)) : [...a, c], []);"
  }
]

const themes = {
  white: {
    primary: "",
    secondary: "",
    tertiary: "",
    quaternary: "",
    mono: "white"
  },
  black: {
    primary: "#dbedf3",
    secondary: "#404b69",
    tertiary: "#283149",
    quaternary: "#00818a",
    mono: "black"
  }
}

const GlobalStyle = createGlobalStyle`
  body {
    font-family: sans-serif;
    margin: 0;
    background-color: #0d1219;
  }
`

const Container = styled.main`
  width: 920px;
  margin: 0 auto;
  padding: 24px 0;
  font-family: sans-serif;
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

