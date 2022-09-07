import React, { ChangeEvent, useState } from "react";
import {
  TextField,
  Box,
  Typography,
  List,
  ListItem,
  Stack,
  ListItemText,
  Button,
} from "@mui/material";
import { blue, lightBlue } from "@mui/material/colors";

import { PrimaryButton } from "./components/atoms/button/PrimaryButton";

function App() {
  const [addTask, setAddTask] = useState("");
  const [incompleteTask, setIncompleteTask] = useState<Array<string>>([]);
  const [completeTask, setCompleteTask] = useState<Array<string>>([]);

  const onChangeTask = (e: ChangeEvent<HTMLInputElement>) =>
    setAddTask(e.target.value);

  const onClickAdd = () => {
    if (addTask === "") return;
    const newTask = [...incompleteTask, addTask];
    setIncompleteTask(newTask);
    setAddTask("");
  };

  const onClickComplete = (index: number) => {
    const newIncompleteTodos = [...incompleteTask];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTask, incompleteTask[index]];
    setIncompleteTask(newIncompleteTodos);
    setCompleteTask(newCompleteTodos);
  };

  const onClickDelete = (index: number) => {
    const newIncompleteTodos = [...incompleteTask];
    newIncompleteTodos.splice(index, 1);

    setIncompleteTask(newIncompleteTodos);
  };

  const onClickBack = (index: number) => {
    const newCompleteTodos = [...completeTask];
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos = [...incompleteTask, completeTask[index]];
    setIncompleteTask(newIncompleteTodos);
    setCompleteTask(newCompleteTodos);
  };

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
        <Button variant="contained" onClick={onClickAdd}>
          追加
        </Button>
      </Box>
      <Stack spacing={3}>
        <Box
          bgcolor={lightBlue[100]}
          borderRadius={4}
          sx={{ p: 4, minWidth: "500px" }}
        >
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
            {incompleteTask.map((task, index) => (
              <ListItem key={index}>
                <ListItemText>{task}</ListItemText>
                <Stack direction="row" spacing={2}>
                  <PrimaryButton
                    onClick={() => onClickComplete(index)}
                    index={index}
                  >
                    完了
                  </PrimaryButton>
                  <PrimaryButton
                    onClick={() => onClickDelete(index)}
                    index={index}
                  >
                    削除
                  </PrimaryButton>
                </Stack>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box
          bgcolor={lightBlue[100]}
          borderRadius={4}
          sx={{ p: 4, minWidth: "500px" }}
        >
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
            {completeTask.map((task, index) => (
              <ListItem key={index}>
                <ListItemText>{task}</ListItemText>
                <PrimaryButton onClick={() => onClickBack(index)} index={index}>
                  戻る
                </PrimaryButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Stack>
    </div>
  );
}

export default App;
