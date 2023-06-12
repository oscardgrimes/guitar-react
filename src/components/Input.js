import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";


const Input = ({defaultValue}) => {
  let notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl variant="filled" sx={{width:"75%"}}>
        <InputLabel id="demo-simple-select-label">Note</InputLabel>
        <Select defaultValue={defaultValue}>
          <MenuItem value={"C"}>C</MenuItem>
          <MenuItem value={"C#"}>C#</MenuItem>
          <MenuItem value={"D"}>D</MenuItem>
          <MenuItem value={"D#"}>D#</MenuItem>
          <MenuItem value={"E"}>E</MenuItem>
          <MenuItem value={"F"}>F</MenuItem>
          <MenuItem value={"F#"}>F#</MenuItem>
          <MenuItem value={"G"}>G</MenuItem>
          <MenuItem value={"G#"}>G#</MenuItem>
          <MenuItem value={"A"}>A</MenuItem>
          <MenuItem value={"A#"}>A#</MenuItem>
          <MenuItem value={"B"}>B</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default Input;
