import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";

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
