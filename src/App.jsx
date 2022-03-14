import GlobalStyle from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import theme from "./styles/theme";
import Destination from "./pages/Destination";
import Header from "./Components/Header";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />

        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destination" element={<Destination />} />
            <Route path="/crew" element={<Crew />} />
            <Route path="/technology" element={<Technology />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
