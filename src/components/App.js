import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./ui/header";
import theme from "./ui/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/services" element={<div>Services, Homey</div>} />
          <Route path="/customsoftware" element={<div>Software, Boyee</div>} />
          <Route path="/mobileapps" element={<div>Mobile Home</div>} />
          <Route path="/websites" element={<div>Webby</div>} />
          <Route path="/revolution" element={<div>360 Degrees</div>} />
          <Route path="/about" element={<div>About MEEEE</div>} />
          <Route path="/contact" element={<div>MORE ABOUT MEEE</div>} />
          <Route path="/estimate" element={<div>What's the damage?</div>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
