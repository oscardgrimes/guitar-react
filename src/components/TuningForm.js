import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Input from "./Input";

const TuningForm = ({ sendTuning }) => {
  let strings = 6;
  let tuning = ["E", "A", "D", "G", "B", "E"];

  //Handle submit, get tuning from inputs.
  const handleSubmit = () => {
    for (let i = 0; i < 6; i++) {
      tuning[i] =
        document.getElementsByClassName("noteInput")[i].firstChild.textContent;
    }
    //Reverse tuning array to display strings in correct order.
    tuning = tuning.reverse();
    console.log("TUNING: " + tuning);
    let notes = getNotes(tuning, 22);
    console.log(notes);
    sendTuning(notes);
  };

  function getNotes(tuning, numNotes) {
    let strings = new Array(6);
    for (let i = 0; i < 6; i++) {
      let notes = new Array(22);
      var currentNote = tuning[i];
      for (let j = 0; j < numNotes; j++) {
        notes[j] = currentNote;
        currentNote = nextNote(currentNote);
      }
      strings[i] = notes;
    }
    return strings;
  }

  function nextNote(note) {
    if (
      note == "C" ||
      note == "D" ||
      note == "F" ||
      note == "G" ||
      note == "A"
    ) {
      return note + "#";
    }
    if (note == "C#" || note == "D#" || note == "F#" || note == "A#") {
      note = note.replace("#", "");
      return nextChar(note);
    }
    if (note == "G#") {
      return "A";
    }
    return nextChar(note);
  }

  function nextChar(char) {
    var res =
      char == "z"
        ? "a"
        : char == "Z"
        ? "A"
        : String.fromCharCode(char.charCodeAt(0) + 1);
    return res;
  }

  //Return input form, set default values for inputs to standard tuning
  return (
    <Box textAlign="center" sx={{ height: "250px", py: "2.5%", px: "25%" }}>
      <Grid container rowSpacing={0.5}>
        <Grid item xs={2}>
          <Input noteValue={"E"} />
        </Grid>
        <Grid item xs={2}>
          <Input noteValue={"A"} />
        </Grid>
        <Grid item xs={2}>
          <Input noteValue={"D"} />
        </Grid>
        <Grid item xs={2}>
          <Input noteValue={"G"} />
        </Grid>
        <Grid item xs={2}>
          <Input noteValue={"B"} />
        </Grid>
        <Grid item xs={2}>
          <Input noteValue={"E"} />
        </Grid>
      </Grid>
      <Button
        variant="contained"
        sx={{ my: "10px" }}
        onClick={() => {
          handleSubmit();
        }}
      >
        Submit
      </Button>
    </Box>
  );
};

export default TuningForm;
