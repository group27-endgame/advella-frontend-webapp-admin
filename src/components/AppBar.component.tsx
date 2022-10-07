import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { fontColor, paperColor, primaryColor } from "../constants";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Paper,
} from "@mui/material";
import { MainLink } from "../links";

type AdvellaAppBarProps = {
  window?: () => Window;
  title?: string;
  children: React.ReactElement | string;
  links: MainLink[];
  drawerWidth?: number;
  defaultExpanded?: boolean;
};

export default function AdvellaAppBar(props: AdvellaAppBarProps) {
  const {
    window,
    children,
    title = "Admin Panel",
    links,
    drawerWidth = 250,
    defaultExpanded = false,
  } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box>
      <Typography variant="h6" sx={{ my: 2 }} textAlign="center">
        <Link to="/" style={{ textDecoration: "none", color: primaryColor }}>
          {title}
        </Link>
      </Typography>
      <Divider />
      {links.map((item) => (
        <Accordion
          defaultExpanded={defaultExpanded}
          key={item.name}
          elevation={0}
          sx={{
            ":before": { backgroundColor: "transparent" },
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Button
              startIcon={item.icon}
              sx={{ p: 0, minWidth: 0, color: fontColor }}
            >
              {item.name}
            </Button>
          </AccordionSummary>
          <AccordionDetails sx={{ pb: 0 }}>
            {item.subLinks.map((sl) => (
              <Box pb={2} key={sl.name}>
                <Link
                  to={sl.link}
                  style={{ textDecoration: "none", color: fontColor }}
                >
                  {sl.name}
                </Link>
              </Box>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Grid container>
      <Grid item md={2} sx={{ display: { xs: "none", md: "block" } }}>
        <Paper
          sx={{ height: "100vh", overflowY: "scroll", pb: 5 }}
          elevation={12}
        >
          <Toolbar>
            <Box
              sx={{
                display: { xs: "none", md: "block" },
                width: "100%",
              }}
            >
              <Typography variant="h6" sx={{ my: 2 }} textAlign="center">
                <Link
                  to="/"
                  style={{ textDecoration: "none", color: primaryColor }}
                >
                  {title}
                </Link>
              </Typography>
              {links.map((item) => (
                <Accordion
                  defaultExpanded={defaultExpanded}
                  key={item.name}
                  elevation={0}
                  sx={{
                    ":before": { backgroundColor: "transparent" },
                  }}
                >
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Button
                      startIcon={item.icon}
                      sx={{ p: 0, minWidth: 0, color: fontColor }}
                    >
                      {item.name}
                    </Button>
                  </AccordionSummary>
                  <AccordionDetails sx={{ pb: 0 }}>
                    {item.subLinks.map((sl) => (
                      <Box pb={2} key={sl.name}>
                        <Link
                          to={sl.link}
                          style={{ textDecoration: "none", color: fontColor }}
                        >
                          {sl.name}
                        </Link>
                      </Box>
                    ))}
                  </AccordionDetails>
                </Accordion>
              ))}
            </Box>
          </Toolbar>
        </Paper>
      </Grid>
      <AppBar sx={{ backgroundColor: paperColor, display: { md: "none" } }}>
        <Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ m: 1, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </AppBar>
      <Box>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Grid item xs={12} md={10}>
        <Box sx={{ p: 2 }}>
          <Toolbar sx={{ display: { md: "none" } }} />
          {children}
        </Box>
      </Grid>
    </Grid>
  );
}
