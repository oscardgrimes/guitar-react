import React from "react";
import { styled } from "@mui/system";
import Note from "./Note.js";

const GridContainer = styled("div")({
  display: "grid",
  gridTemplateColumns: "repeat(22, 1fr)",
  gap: "8px",
});

const ColumnNumber = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const Fretboard = ({ tuning }) => {
  const columnNumbers = Array.from({ length: 22 }, (_, index) => index);

  return (
    <GridContainer>
      {columnNumbers.map((colNumber) => (
        <ColumnNumber key={`col-${colNumber}`}>{colNumber}</ColumnNumber>
      ))}
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
