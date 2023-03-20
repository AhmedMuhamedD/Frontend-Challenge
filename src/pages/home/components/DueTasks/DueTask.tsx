import { Button, Divider, Grid } from "@mui/material";
import Box from "@mui/material/Box/Box";
import Typography from "@mui/material/Typography/Typography";
import { FC } from "react";
import { Quiz } from "../../../../api/quizes";

type Props = { quiz: Quiz };

export const DueTask: FC<Props> = ({ quiz }) => {
  return (
    <Box>
      <Typography variant="subtitle1" fontWeight="bold">
        {quiz.title}
      </Typography>
      <Typography variant="body2">Course: {quiz.course}</Typography>
      <Typography variant="body2">Topic: {quiz.topic}</Typography>
      <Typography variant="body2">Due to: {quiz.dueTo}</Typography>
      <Button variant="contained" fullWidth sx={{ marginY: 2 }}>
        Start Quiz
      </Button>
    </Box>
  );
};
