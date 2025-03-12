import { Box, keyframes, Typography, ThemeProvider } from "@mui/material";
import { useState } from "react";
import Portada from "./components/Portada";
import theme from "./theme.js";
import FraseInicial from "./components/FraseInicial.jsx";
import Location from "./components/Location.jsx";
import Countdown from "./components/Countdown.jsx";
import Confirmation from "./components/Confirmation.jsx";
import Footer from "./components/Footer.jsx";

const db = {
  name: "Amelia",
  date: "2025-03-29T12:30:00",
  location: "https://maps.app.goo.gl/aW9snNCrDCXaWqss9",
  imgCover:
    "https://res.cloudinary.com/dqqbiacuz/image/upload/v1741648509/a4dd95d0a51e76e3267fa0e77d5a810b_1_m5wlce.png",
  phoneNumber: "5492215792334",
};

const bounce = keyframes`
0%, 20%, 50%, 80%, 100% {
  transform: translateY(0);
}
40% {
  transform: translateY(-10px);
}
60% {
  transform: translateY(-5px);
}
`;

function App() {
  const [data] = useState(db);

  return (
    <ThemeProvider theme={theme}>
      <Portada data={data} bounce={bounce} />
      <FraseInicial />
      <Location data={data} bounce={bounce} />
      <Countdown targetDate={data.date} />
      <Confirmation phoneNumber={data.phoneNumber} />

      <Footer />
    </ThemeProvider>
  );
}

export default App;
