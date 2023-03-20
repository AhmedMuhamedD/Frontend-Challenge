import * as React from "react";
import { Box } from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import Toolbar from "@mui/material/Toolbar";
import DrawerComponent from "../../components/Drawer";
import Header from "../../components/Header";
import Annoucements from "./components/Announcements";
import Grid2 from "@mui/material/Unstable_Grid2";
import DueTasks from "./components/DueTasks";

const drawerWidth = 240;

const HomePage = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = //*TODO* refactor this code
    (
      <div>
        <Toolbar />
        <List>
          {["Dashboard", "Schedule"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </div>
    );

  return (
    <Grid2 container sx={{ height: "100vh", width: "100vw" }}>
      <Header drawerWidth={drawerWidth} handleDrawerToggle={handleDrawerToggle} />
      <DrawerComponent mobileOpen={mobileOpen} drawer={drawer} handleDrawerToggle={handleDrawerToggle} />
      <Box
        component="main"
        sx={{
          p: 3,
          marginTop: 8,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          backgroundColor: "#ffffff",
        }}
      >
        <Grid2 container spacing={2}>
          <Grid2 md={12} xl={8}>
            <Annoucements />
          </Grid2>
          <Grid2 xs>
            <DueTasks />
          </Grid2>
        </Grid2>
      </Box>
    </Grid2>
  );
};

export default HomePage;
