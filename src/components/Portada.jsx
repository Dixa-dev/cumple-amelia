import { Box, Typography, useMediaQuery } from "@mui/material";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

const Portada = ({ data, bounce }) => {
  const isMobile = useMediaQuery("(max-width:600px)");

  const handleScroll = () => {
    const location = document.getElementById("location");
    if (location) {
      location.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "5vh 0", // Añade espacio para evitar desbordes en mobile
      }}
    >
      {/* Imagen de fondo */}
      <img
        src={data.imgCover}
        alt="Portada"
        style={{
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 0,
        }}
      />

      {/* Imagen de Merlina */}
      <img
        src="https://res.cloudinary.com/dqqbiacuz/image/upload/v1741650164/Merlina_con_manos_1_zzuj6t.png"
        alt="Merlina"
        style={{
          maxWidth: isMobile ? "50%" : "70%",
          maxHeight: isMobile ? "40vh" : "65vh",
          objectFit: "contain",
          zIndex: 1,
          marginBottom: isMobile ? "-8vh" : "-15vh",
        }}
      />

      {/* Texto AMELIA 6 */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          zIndex: 1,
          marginBottom: isMobile ? "-2vh" : "-5vh",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Nucreativo2008, sans-serif",
            color: "black",
            fontSize: isMobile ? "40px" : "70px",
            textAlign: "center",
            zIndex: 1,
          }}
        >
          AMELIA
        </Typography>
        <Typography
          sx={{
            fontSize: isMobile ? "120px" : "200px",
            fontWeight: "600",
            color: "#C1658E",
            marginLeft: isMobile ? "-25px" : "-45px",
            WebkitTextStrokeColor: "black",
            WebkitTextStrokeWidth: "1px",
            zIndex: 0,
          }}
        >
          6
        </Typography>
      </Box>

      {/* Icono de flecha hacia abajo */}
      <KeyboardArrowDownRoundedIcon
        sx={{
          color: "black",
          fontSize: isMobile ? 40 : 50,
          position: "absolute",
          bottom: isMobile ? "5vh" : "2vh", // Asegura que sea visible en mobile
          cursor: "pointer",
          animation: `${bounce} 2s infinite`,
          zIndex: 2,
        }}
        onClick={handleScroll}
      />
    </Box>
  );
};

export default Portada;
