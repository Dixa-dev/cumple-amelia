import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";

const Countdown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate) - new Date();
    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: "#676491",
        textAlign: "center",
        padding: "10px",
        animation: `fadeIn 1s ease-in-out`,
        height: "50vh",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        marginTop:"-5vh"
      }}
    >
      <Box>
        <Typography
          sx={{ fontSize: "40px", fontWeight: "200", color: "#FBF8F1" }}
        >
          FALTAN
        </Typography>
      </Box>
      
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "15px",
          backgroundColor: "#FBF8F1",
          borderRadius: "32px",
          alignItems: "center",
          width:"90%",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.15)",
          height:"25vh"

          
          
        }}
      >
        {[{ label: "DÍAS", value: timeLeft.days },
          { label: "HRS", value: timeLeft.hours },
          { label: "MIN", value: timeLeft.minutes },
          { label: "SEG", value: timeLeft.seconds },
        ].map((item, index, array) => (
          <>
            <Box key={index} sx={{ display: "flex" }}>
              <Box
                sx={{
                  backgroundColor: "#FBF8F1",
                  color: "#787878",
                  width: "5vw",
                  height: "10vh",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  
                }}
              >
                <Typography sx={{ fontSize: "36px", fontWeight: "500" }}>
                  {item.value}
                </Typography>
                <Typography sx={{ fontSize: "20px", fontWeight: "200" }}>
                  {item.label}
                </Typography>
              </Box>
            </Box>
            {/* Barra separadora entre los elementos, excepto al final */}
            {index < array.length - 1 && (
              <Box
                sx={{
                  height: "30%",
                  borderLeft: "1.5px solid #8C8C8C",
                  margin: "0 10px",
                }}
              />
            )}
          </>
        ))}
      </Box>
      </Box>

    
  );
};

export default Countdown;

