import { Box, Typography } from "@mui/material";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

const Portada = ({ data, bounce }) => {
  const handleScroll = () => {
    const fraseInicial = document.getElementById("frase-inicial");
    if (fraseInicial) {
      fraseInicial.scrollIntoView({ behavior: "smooth", block: "start"});
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
        justifyContent: "center", // Centra los elementos verticalmente
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
          maxWidth: "60%", // Se mantiene el tamaño original
          maxHeight: "65vh",
          objectFit: "contain",
          zIndex: 1,
          marginBottom: "-12vh",
          marginTop:"-10vh" // Ajusta el margen para acercarlo al texto
        }}
      />

      {/* Texto AMELIA 6 */}
      <Box 
      sx={{
        display:"flex",
        flexDirection:"column",
        alignItems:"center"
      }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          zIndex: 1,
          marginBottom: "-5vh",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Nucreativo2008, sans-serif",
            color: "black",
            fontSize: "70px",
            textAlign: "center",
            zIndex: 1,
          }}
        >
          AMELIA
        </Typography>
        <Typography
          sx={{
            fontSize: "200px",
            fontWeight: "600",
            color: "#C1658E",
            marginLeft: "-45px",
            WebkitTextStrokeColor: "black",
            WebkitTextStrokeWidth: "1px",
            zIndex: 0,
          }}
        >
          6
        </Typography>
        </Box>
        <KeyboardArrowDownRoundedIcon
        sx={{
          color: "black",
          fontSize: 50,
          // position: "absolute",
          cursor: "pointer",
          animation: `${bounce} 2s infinite`,
          zIndex: 1,
        }}
        onClick={handleScroll}
      />
      </Box>

      {/* Icono de flecha hacia abajo */}
    
    </Box>
  );
};

export default Portada;
