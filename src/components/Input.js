import React, { useState } from "react";
import { Box, Select, InputLabel, MenuItem, FormControl } from "@mui/material";

//Input for each string - containing all notes

function Input({ noteValue }) {
  let notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl variant="filled" sx={{ width: "75%" }}>
        <InputLabel>Note</InputLabel>
        <Select className="noteInput" defaultValue={noteValue}>
          {notes.map((note) => (
            <MenuItem key={note} value={note}>
              {note}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

export default Input;
