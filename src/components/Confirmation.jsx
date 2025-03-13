import { Box, Typography } from "@mui/material";

const Confirmation = ({ phoneNumber }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#E7C0D1",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "30vh",
        justifyContent: "center",
        textAlign: "center",
        gap: "2vh",
        position: "relative", // Contenedor relativo para posicionamiento absoluto del árbol
      }}
    >
      {/* Árbol posicionado absolutamente */}
      <img
        src="https://res.cloudinary.com/dqqbiacuz/image/upload/v1741738395/Arbol_1_whdrao.png"
        style={{
          position: "absolute",
          right: 0,
          bottom: -6, // Base alineada con la base del contenedor
          width: "35%", // Ajusta el tamaño según necesites
          zIndex: 0, // Envía el árbol detrás del texto
          marginRight: "2vw", // Margen derecho para separación
        }}
        alt="Decoración"
      />

      <Typography
        sx={{
          fontSize: "24px",
          width: "75%",
          fontWeight: "500",
          color: "black",
          zIndex: 1, // Asegura el texto esté sobre el árbol
        }}
      >
        ¿Venis a festejar? ¡Confirmá tu asistencia!
      </Typography>
      
      {/* Botón de WhatsApp */}
      <button
        onClick={() =>
          window.open(
            `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
              "¡Hola! Quiero confirmar mi asistencia al cumple de Ame"
            )}`,
            "_blank"
          )
        }
        style={{ 
          background: "none", 
          border: "none", 
          cursor: "pointer",
          zIndex: 1 // Asegura el botón esté sobre el árbol
        }}
      >
        <img
          src="https://res.cloudinary.com/dqqbiacuz/image/upload/v1741738312/whatsapp_pb5nqp.png"
          alt="icon-whatsApp"
          style={{ width: "12vw" }} // Tamaño responsivo
        />
      </button>
    </Box>
  );
};

export default Confirmation;