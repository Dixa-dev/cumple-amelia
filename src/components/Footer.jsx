import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "#676491",
        height: "10vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap:"2vh"
      
      }}
    >
      <Typography
        sx={{
          fontFamily: "Nucreativo2008, sans-serif",
          fontSize: "23px",
          color: "#FBF8F1",
          fontWeight: "400",
          marginTop:"2vh"
        }}
      >
        Te espero para festejar juntos
      </Typography>

      {/* Pie de página con logo */}
      <Box
        sx={{
          bgcolor: "black",
          width: "100%",
          height: "3vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 1, // Espaciado entre el texto y el logo
          paddingX: 1,
        }}
      >
        <Typography sx={{ fontSize: "10px", color: "white" }}>
          Hecho por
        </Typography>

        {/* Logo al lado del texto */}
        <Box
          component="img"
          src="https://res.cloudinary.com/dqqbiacuz/image/upload/v1741742897/dixa_hqvq9i.jpg" // Cambia por la ruta real del logo
          alt="Logo"
          sx={{
            maxWidth: "15px", // Ajusta según el tamaño deseado
            height: "auto",
          }}
        />
      </Box>
    </Box>
  );
};

export default Footer;
