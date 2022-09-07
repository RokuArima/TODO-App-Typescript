import React from "react";
import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import {TextField, Box} from "@mui/material"
import {lightBlue} from "@mui/material/colors"

function App() {
  const onClickAdd = () => {
    alert("test");
  };

  return (
    <div className="App">
      <Box sx={{display:"flex", justifyContent: "center", p: 4}}>
        <TextField id="outlined-basic" label="タスクを入力" size="small" sx={{mr:2, width:"300px"}}></TextField>
        <PrimaryButton onClick={onClickAdd}>追加</PrimaryButton>
      </Box>
      <Box bgcolor={lightBlue[100]} borderRadius={4}>
        
      </Box>
    </div>
  );
}

export default App;
