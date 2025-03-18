import { Box, Button, Link, Typography } from "@mui/material";
import CalendarMonthTwoToneIcon from "@mui/icons-material/CalendarMonthTwoTone";
import LocationOnTwoToneIcon from "@mui/icons-material/LocationOnTwoTone";
import Countdown from "./Countdown";

const Location = ({ data, bounce }) => {
  return (
    <Box
      id="location"
      sx={{
        bgcolor: " #676491;",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "65vh",
        justifyContent: "space-around",
        textAlign: "center",
      }}
    >
      <Box>
        <CalendarMonthTwoToneIcon
          sx={{
            color: "#FBF8F1",
            fontSize: "50px",
            fill: "none",
            stroke: "#FBF8F1",
            strokeWidth: 0.5,
            animation: `${bounce} 2s infinite`, // Agregamos la animación bounce
          }}
        />
        <Typography
          sx={{ color: "#FBF8F1", fontSize: "24px", fontWeight: "500" }}
        >
          ¿Cuándo?
        </Typography>
        <Typography
          sx={{ color: "#FBF8F1", fontSize: "18px", fontWeight: "300" }}
        >
          Sábado 29 de Marzo de 2025
        </Typography>
        <Typography
          sx={{ color: "#FBF8F1", fontSize: "18px", fontWeight: "300" }}
        >
          ---
        </Typography>
        <Typography
          sx={{ color: "#FBF8F1", fontSize: "18px", fontWeight: "300" }}
        >
          12:30 HS
        </Typography>
      </Box>
      <Box sx={{ marginBottom: "2vh" }}>
        <LocationOnTwoToneIcon
          sx={{
            color: "#FBF8F1",
            fontSize: "50px",
            fill: "none",
            stroke: "#FBF8F1",
            strokeWidth: 0.5,
            animation: `${bounce} 2s infinite`,
          }}
        />
        <Typography
          sx={{ color: "#FBF8F1", fontSize: "24px", fontWeight: "500" }}
        >
          ¿Dónde?
        </Typography>
        <Typography
          sx={{ color: "#FBF8F1", fontSize: "20px", fontWeight: "300" }}
        >
          Malaia Eventos{" "}
        </Typography>
        <Typography
          sx={{ color: "#FBF8F1", fontSize: "20px", fontWeight: "300" }}
        >
          ---
        </Typography>
        <Typography
          sx={{ color: "#FBF8F1", fontSize: "20px", fontWeight: "300" }}
        >
          Calle 421 N°417 e/ Centenario y 5
        </Typography>
        <Typography
          sx={{ color: "#FBF8F1", fontSize: "20px", fontWeight: "300" }}
        >
          Villa Elisa{" "}
        </Typography>
        <Link
          href={data.location}
          target="_blank"
          rel="noopener noreferrer"
          sx={{ textDecoration: "none" }}
        >
          <Button
            variant="contained"
            sx={{
              color: "#4F4F4F",
              border: "0.5px solid #4F4F4F",
              background: "#FBF8F1",
              marginTop: "1.5vh",
            }}
          >
            VER MAPA
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Location;
