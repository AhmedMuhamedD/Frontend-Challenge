import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";

import { useQuery } from "react-query";
import { fetchQuizes, Quizes } from "../../../../api/quizes";
import { DueTask } from "./DueTask";

const DueTasks = () => {
  const { data, status } = useQuery<Quizes>("DueTasks", fetchQuizes);

  if (status === "loading") {
    //*TODO* refactor this to a Status componnent
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress />
      </Box>
    );
  }

  if (status === "error") {
    return <Alert severity="error">{"An error occurred while fetching DueTasks."}</Alert>;
  }

  return (
    <Paper sx={{ padding: 2 }} elevation={2}>
      <Box>
        <Typography variant="h6" fontWeight="bold">
          What's Due
        </Typography>
        <Typography variant="subtitle2" color="gray">
          Sometimes later becomes never go now
        </Typography>
      </Box>
      <Box padding={4}>
        {data?.map((quiz) => (
          <DueTask key={quiz.id} quiz={quiz} />
        ))}
      </Box>
    </Paper>
  );
};

export default DueTasks;
