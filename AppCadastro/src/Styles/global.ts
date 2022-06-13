import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html{
  scroll-behavior: smooth;
}

body{
  width: 100vw;
  height: 100vh;
  position: relative;
  background:#e5e4e5;
 
}

`
