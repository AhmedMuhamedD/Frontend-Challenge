import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import { useQuery } from "react-query";

import { Annoucement } from "./Annoucement";
import { fetchAnnouncements } from "../../../../api/annoucements";
import type { Annoucements } from "../../../../api/annoucements";

const Announcements = () => {
  const { data, status } = useQuery<Annoucements>("announcements", fetchAnnouncements);

  if (status === "loading") {
    //*TODO* refactor this to a Status componnent
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress />
      </Box>
    );
  }

  if (status === "error") {
    return <Alert severity="error">{"An error occurred while fetching announcements."}</Alert>;
  }

  return (
    <Paper sx={{ padding: 2 }} elevation={2}>
      <Box>
        <Typography variant="h6" fontWeight="bold">
          Announcements
        </Typography>
        <Typography variant="subtitle2" color="gray">
          We educate warriors! keep updated :)
        </Typography>
      </Box>
      <Box padding={2}>
        {status === "success" &&
          data.map((announcement) => <Annoucement key={announcement.id} announcement={announcement} />)}
      </Box>
    </Paper>
  );
};

export default Announcements;
