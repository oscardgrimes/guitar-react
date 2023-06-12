import React from "react";
import { Avatar } from "@mui/material";

const Note = ({ note }) => {
  let noteColor = "white";
  switch (note) {
    case "C":
      noteColor = "#eb3434";
      break;
    case "C#":
      noteColor = "#eb8334";
      break;
    case "D":
      noteColor = "#ebe834";
      break;
    case "D#":
      noteColor = "#baeb34";
      break;
    case "E":
      noteColor = "#58eb34";
      break;
    case "F":
      noteColor = "#34eba8";
      break;
    case "F#":
      noteColor = "#34ebeb";
      break;
    case "G":
      noteColor = "#3499eb";
      break;
    case "G#":
      noteColor = "#343deb";
      break;
    case "A":
      noteColor = "#9c34eb";
      break;
    case "A#":
      noteColor = "#eb34e8";
      break;
    case "B":
      noteColor = "#eb3477";
      break;
    default:
      noteColor = "white";
      break;
  }
  return <Avatar sx={{ backgroundColor: noteColor }}>{note}</Avatar>;
};

export default Note;
