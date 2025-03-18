  import { Box, keyframes, ThemeProvider, IconButton } from "@mui/material";
  import { useState, useEffect, useRef } from "react";
  import { VolumeOff, VolumeUp } from "@mui/icons-material";
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
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
      if (audioRef.current) {
        isPlaying ? audioRef.current.play() : audioRef.current.pause();
      }
    }, [isPlaying]);

    // Función para activar la música al hacer scroll
    const handleScrollClick = () => {
      if (!isPlaying) {
        setIsPlaying(true);
      }
    };

    return (
      <ThemeProvider theme={theme}>
        {/* Ícono de megáfono para controlar la música */}
        <Box
          sx={{
            position: "fixed",
            bottom: 20,
            right: 20,
            zIndex: 1000,
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            borderRadius: "50%",
            padding: "6px",
          }}
        >
          <IconButton onClick={() => setIsPlaying(!isPlaying)} sx={{ color: "white" }}>
            {isPlaying ? <VolumeUp fontSize="medium" /> : <VolumeOff fontSize="medium" />}
          </IconButton>
        </Box>

        {/* Reproductor de audio oculto */}
        <audio ref={audioRef} loop>
          <source
            src="https://res.cloudinary.com/dqqbiacuz/video/upload/v1741745037/Goo_Goo_Muck_c5lsm7.mp3"
            type="audio/mp3"
          />
        </audio>

        {/* Pasamos la función al componente de Portada para activarla en el scroll */}
        <Portada data={data} bounce={bounce} onScrollClick={handleScrollClick} />
        <FraseInicial />
        <Location data={data} bounce={bounce} />
        <Countdown targetDate={data.date} />
        <Confirmation phoneNumber={data.phoneNumber} bounce={bounce} />
        <Footer />
      </ThemeProvider>
    );
  }

  export default App;
