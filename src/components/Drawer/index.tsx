import { Box } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";
import { FC } from "react";

type Props = {
  drawer: React.ReactNode;
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
};

const drawerWidth = 240;

const DrawerComponent: FC<Props> = ({ drawer, mobileOpen, handleDrawerToggle }) => {
  const classes = useStyles();

  return (
    <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        classes={{ paper: classes.paper }}
        className={classes.temporary}
      >
        {drawer}
      </Drawer>
      <Drawer variant="permanent" classes={{ paper: classes.paper }} className={classes.permanent} open>
        {drawer}
      </Drawer>
    </Box>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    boxSizing: "border-box",
    width: drawerWidth,
  },
  temporary: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  permanent: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));
export default DrawerComponent;
