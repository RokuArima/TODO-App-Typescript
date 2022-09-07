import React, { ChangeEvent, useState } from "react";
import {
  TextField,
  Box,
  Typography,
  List,
  ListItem,
  Stack,
  ListItemText,
} from "@mui/material";
import { blue, lightBlue } from "@mui/material/colors";

import { PrimaryButton } from "./components/atoms/button/PrimaryButton";

function App() {
  const [addTask, setAddTask] = useState("");
  const [incompleteTask, setIncompleteTask] = useState<Array<string>>([
    "あいうえお",
    "kajda",
  ]);
  const [completeTask, setCompleteTask] = useState<Array<string>>([
    "あいうえお",
    "kajda",
  ]);
  
  const onChangeTask = (e: ChangeEvent<HTMLInputElement>) =>
  setAddTask(e.target.value);

  const onClickAdd = () => {
    alert("test");
  };
  
  const onClickComplete = () => {
    alert("完了");
  };

  const onClickDelete = () => {
    alert("削除");
  };

  const onClickBack = () => {
    alert("戻る");
  }

  return (
    <div className="App">
      <Box sx={{ display: "flex", justifyContent: "center", p: 4 }}>
        <TextField
          id="outlined-basic"
          label="タスクを入力"
          size="small"
          sx={{ mr: 2, width: "300px" }}
          value={addTask}
          onChange={onChangeTask}
        ></TextField>
        <PrimaryButton onClick={onClickAdd}>追加</PrimaryButton>
      </Box>
      <Stack spacing={3}>
        <Box bgcolor={lightBlue[100]} borderRadius={4} sx={{ p: 4 }}>
          <Typography
            variant="h2"
            fontSize="20px"
            fontWeight="bold"
            textAlign="center"
            color={blue[600]}
          >
            未完了のタスク
          </Typography>
          <List>
            {incompleteTask.map((task) => (
              <ListItem>
                <ListItemText>{task}</ListItemText>
                <Stack direction="row" spacing={2}>
                  <PrimaryButton onClick={onClickComplete}>完了</PrimaryButton>
                  <PrimaryButton onClick={onClickDelete}>削除</PrimaryButton>
                </Stack>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box bgcolor={lightBlue[100]} borderRadius={4} sx={{ p: 4 }}>
          <Typography
            variant="h2"
            fontSize="20px"
            fontWeight="bold"
            textAlign="center"
            color={blue[600]}
          >
            完了したタスク
          </Typography>
          <List>
            {completeTask.map((task) => (
              <ListItem>
                <ListItemText>{task}</ListItemText>
                <PrimaryButton onClick={onClickBack}>戻る</PrimaryButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Stack>
    </div>
  );
}

export default App;
