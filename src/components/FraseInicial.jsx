import { Box, Typography } from "@mui/material";

const FraseInicial = () => {
  return (
    <Box
      id="frase-inicial"
      sx={{
        height: "30vh",
        backgroundColor: " #E7C0D1;",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        
        
      }}
    >
      <img
        src="https://res.cloudinary.com/dqqbiacuz/image/upload/v1741735155/Murcielago_copy_-_copia_1_n6wbrw.png"
        alt="murcielago1"
        style={{
            alignSelf: "flex-start",
        }}
      />

      <Typography
        sx={{
          fontSize: "20px",
          fontWeight: "400",
          letterSpacing: "0.02px",
          textAlign: "center",
          width: "90%",
          marginTop:"-2vh",
          marginBottom:"-2vh",
        }}
      >
        ¡Te espero para compartir una tarde única, divertida y mágica!{" "}
      </Typography>
      <img
        src="https://res.cloudinary.com/dqqbiacuz/image/upload/v1741735156/Murcielago_copy_1_hpkz55.png"
        alt="murcielago1"
        style={{
            alignSelf: "flex-end",
            marginRight:"5vw"
        }}
      />
    </Box>
  );
};

export default FraseInicial;
