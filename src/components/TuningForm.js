import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Input from "./Input";

const TuningForm = () => {
return(
  <Box textAlign='center' sx={{height: "250px",py: "2.5%",px: "25%"}}>
  <Grid container rowSpacing={0.5}>
    <Grid xs={2}>
      <Input id="string1" defaultValue={"E"}/>
    </Grid>
    <Grid xs={2}>
      <Input defaultValue={"A"}/>
    </Grid>
    <Grid xs={2}>
      <Input defaultValue={"D"}/>
    </Grid>
    <Grid xs={2}>
      <Input defaultValue={"G"}/>
    </Grid>
    <Grid xs={2}>
      <Input defaultValue={"B"}/>
    </Grid>
    <Grid xs={2}>
      <Input defaultValue={"E"}/>
    </Grid>
  </Grid>
  <Button variant="contained" sx={{my:"10px"}} onClick={() => { changeNotes()}}>Submit</Button>
</Box>
)
};

function changeNotes()
{
  let tuning = Array(6);
  for(let i = 0; i < 6; i++)
  {
    tuning[i] = document.getElementsByClassName("MuiSelect-nativeInput")[i].value
  }
  return tuning;
}

export default TuningForm;
