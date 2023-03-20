import { Divider, Grid } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box/Box";
import Typography from "@mui/material/Typography/Typography";
import { FC } from "react";
import { Announcement } from "../../../../api/annoucements";
import { getInitials } from "../../../../helpers/getInitials";

type Props = { announcement: Announcement };

export const Annoucement: FC<Props> = ({ announcement }) => {
  return (
    <Grid container sx={{ marginBottom: 4 }} spacing={1}>
      <Grid xs>
        <Box width="100%" display="flex" flexDirection="row">
          <Avatar sx={{ marginRight: 2 }}>{getInitials(announcement.name)}</Avatar>
          <Box>
            <Typography variant="subtitle1" fontWeight="bold">
              {announcement.name}
            </Typography>
            <Typography color="gray" variant="subtitle2">
              {announcement.subject}
            </Typography>
          </Box>
        </Box>
      </Grid>

      <Grid xs={1}>
        <Divider orientation="vertical" sx={{ marginRight: 6 }} />
      </Grid>

      <Grid xs={8} display="flex" alignItems="center">
        <Typography>{announcement.description}</Typography>
      </Grid>
    </Grid>
  );
};
