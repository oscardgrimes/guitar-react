import React, { useState } from "react";
import { AppBar, Box, Toolbar, Typography, Avatar } from "@mui/material";
import Fretboard from "./Fretboard";
import TuningForm from "./TuningForm";

const App = () => {
  //Get tuning from Tuning Form
  const [dTuning, setTuning] = useState("");
  const getTuning = (data) => {
    setTuning(data);
    console.log(dTuning);
  };
  //Default tuning
  const tuning = [
    [
      "E",
      "F",
      "F#",
      "G",
      "G#",
      "A",
      "A#",
      "B",
      "C",
      "C#",
      "D",
      "D#",
      "E",
      "F",
      "F#",
      "G",
      "G#",
      "A",
      "A#",
      "B",
      "C",
      "C#",
    ],
    [
      "B",
      "C",
      "C#",
      "D",
      "D#",
      "E",
      "F",
      "F#",
      "G",
      "G#",
      "A",
      "A#",
      "B",
      "C",
      "C#",
      "D",
      "D#",
      "E",
      "F",
      "F#",
      "G",
      "G#",
    ],
    [
      "G",
      "G#",
      "A",
      "A#",
      "B",
      "C",
      "C#",
      "D",
      "D#",
      "E",
      "F",
      "F#",
      "G",
      "G#",
      "A",
      "A#",
      "B",
      "C",
      "C#",
      "D",
      "D#",
      "E",
    ],
    [
      "D",
      "D#",
      "E",
      "F",
      "F#",
      "G",
      "G#",
      "A",
      "A#",
      "B",
      "C",
      "C#",
      "D",
      "D#",
      "E",
      "F",
      "F#",
      "G",
      "G#",
      "A",
      "A#",
      "B",
    ],
    [
      "A",
      "A#",
      "B",
      "C",
      "C#",
      "D",
      "D#",
      "E",
      "F",
      "F#",
      "G",
      "G#",
      "A",
      "A#",
      "B",
      "C",
      "C#",
      "D",
      "D#",
      "E",
      "F",
      "F#",
    ],
    [
      "E",
      "F",
      "F#",
      "G",
      "G#",
      "A",
      "A#",
      "B",
      "C",
      "C#",
      "D",
      "D#",
      "E",
      "F",
      "F#",
      "G",
      "G#",
      "A",
      "A#",
      "B",
      "C",
      "C#",
    ],
  ];
  //Render main interface
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Avatar src="https://clipart-library.com/images/qiBXAa8aT.png" />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Guitar Fretboard Generator
          </Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{ height: "225px" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            p: 2,
            maxWidth: 600,
            mx: "auto",
            textAlign: "center",
          }}
        >
          <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
            Guitar Fretboard Generator
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Generate and visualize the fretboard of a guitar based on a specific
            tuning. Simply select the desired tuning and the fretboard will be
            displayed, showing the notes for each string and fret.
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Experiment with different tunings to explore the possibilities and
            enhance your understanding of the guitar fretboard.
          </Typography>
        </Box>
      </Box>
      <Box sx={{ height: "100%", px: "10%" }}>
        <Fretboard tuning={dTuning.length !== 0 ? dTuning : tuning} />
      </Box>
      <TuningForm sendTuning={getTuning}></TuningForm>
      <Box></Box>
    </Box>
  );
};

export default App;
