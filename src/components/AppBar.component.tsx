import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { fontColor, paperColor, tertiaryColor } from "../constants";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Badge,
  Grid,
  Paper,
} from "@mui/material";
import { MainLink } from "../links";
import RouterLink from "./RouterLink.component";
import LogoutComponent from "./Logout.component";

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
  const [expanded, setExpanded] = React.useState("");

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box>
      <Typography variant="h6" sx={{ my: 2, textTransform: "uppercase", fontSize: 18 }} textAlign="center">
        <RouterLink to="/dashboard" color={tertiaryColor}>
          {title}
        </RouterLink>
      </Typography>
      <Divider />
      {links.map((item) => (
        <Accordion
          defaultExpanded={defaultExpanded}
          key={item.name}
          elevation={0}
          expanded={expanded === item.name}
          onChange={() => expanded === item.name ? setExpanded("") : setExpanded(item.name)}
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
                <RouterLink onClick={handleDrawerToggle} to={sl.link}>{sl.name}</RouterLink>
              </Box>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
      <LogoutComponent />
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Grid container>
      <Grid item md={2} sx={{ display: { xs: "none", md: "block" } }} >
        <Box width="16.5%" sx={{overflowY: "scroll", position: "fixed", height: "100%"}}>
        <Paper
          sx={{ pb: 5,  height: "100%" }}
          elevation={12}
        >
          <Toolbar>
            <Box
              sx={{
                display: { xs: "none", md: "block" },
                width: "100%",
              }}
            >
              <Typography variant="h6" sx={{ my: 2, textTransform: "uppercase", fontSize: 26 }} textAlign="center">
                <RouterLink to="/dashboard" color={tertiaryColor}>
                  {title}
                </RouterLink>
              </Typography>
              {links.map((item) => (
                <Accordion
                  defaultExpanded={defaultExpanded}
                  key={item.name}
                  elevation={0}
                  expanded={expanded === item.name}
                  onChange={() => expanded === item.name ? setExpanded("") : setExpanded(item.name)}
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
                      <Badge key={sl.name} badgeContent={sl.unread} sx={{pr: 1}} color="primary" anchorOrigin={{vertical: "top", horizontal: "right"}}>
                      <Box pb={2} >
                        
                          <RouterLink to={sl.link}>{sl.name}</RouterLink>
                        
                      </Box>
                      </Badge>
                    ))}
                  </AccordionDetails>
                </Accordion>
              ))}
              <LogoutComponent />
            </Box>
          </Toolbar>
        </Paper>
        </Box>
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
