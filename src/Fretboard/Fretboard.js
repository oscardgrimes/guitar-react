import React from "react";
import { styled } from "@mui/system";
import Note from "../components/Note.js";
import Input from "../components/TuningForm.js";

const GridContainer = styled("div")({
  display: "grid",
  gridTemplateColumns: "repeat(22, 1fr)",
  gap: "8px",
});

const Fretboard = ({ tuning }) => {
  return (
    <GridContainer>
      {tuning.map((row, rowIndex) =>
        row.map((text, colIndex) => (
          <Note key={`${rowIndex}-${colIndex}`} note={text}>
            {text}
          </Note>
        ))
      )}
    </GridContainer>
  );
};
export default Fretboard;
