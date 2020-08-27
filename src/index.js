import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import './index.css';
import './App.css';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Main from './components/Main';
import ComputerIcon from '@material-ui/icons/Computer';
import PersonIcon from '@material-ui/icons/Person';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import DescriptionIcon from '@material-ui/icons/Description';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import cyan from '@material-ui/core/colors/cyan';
import coderIcon from './images/coder-icon.jpg';
import Contact from './components/Contact';
import Portfolio from './components/./Portfolio';

import {
  makeStyles,
  useTheme,
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
      // display: 'none',
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  devCard: {
    '& h1': {
      fontSize: theme.typography.pxToRem(32),
      textAlign: 'center',
      marginBottom: theme.typography.pxToRem(24),
      marginTop: theme.typography.pxToRem(24),
      color: theme.palette.common.white,
    },
  },
  devCardIcons: {
    '& svg': {
      margin: theme.spacing(1),
    },
  },
  avatar: {
    marginBottom: theme.typography.pxToRem(24),
    '& img': {
      borderRadius: '50%',
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      // display: 'none',
    },
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },

  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },

  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#1e2a3a',
    color: theme.palette.grey[400],
    '& svg': {
      color: theme.palette.grey[400],
    },
  },
  activeLink: {
    color: theme.palette.primary.main,
    '& svg': {
      color: theme.palette.primary.main,
    },
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1),
    color: '#000000',
    '& svg': {
      color: 'inherit',
    },
  },
}));

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const keyToComponentMap = {
    contact: Contact,
    aboutMe: Main,
    portfolio: Portfolio,
  };

  const pages = ['aboutMe', 'portfolio', 'resume', 'contact'];

  const [page, setPage] = React.useState(pages[0]);

  const drawer = (
    <div>
      {/* <div className={classes.toolbar} /> */}
      {/* <Divider /> */}
      <Box className={classes.devCard}>
        <Typography variant="h1" gutterBottom>
          Roman Nikolaenkov
        </Typography>
        <Box className={classes.avatar} display="flex" justifyContent="center">
          <img src={coderIcon} alt="developer" width="100px" height="100px" />
        </Box>
      </Box>
      <Box
        className={classes.devCardIcons}
        display="flex"
        justifyContent="center"
        m={4}
      >
        <Link href="https://github.com/r0mka/" target="_blank" color="inherit">
          <GitHubIcon style={{ fontSize: 40, color: cyan[500] }} />
        </Link>
        <Link
          href="https://linkedin.com/in/r0mka"
          target="_blank"
          color="inherit"
        >
          <LinkedInIcon style={{ fontSize: 40, color: cyan[500] }} />
        </Link>
      </Box>
      <Divider />
      <List className={classes.menuList}>
        <ListItem
          button
          className={page === 'aboutMe' ? classes.activeLink : null}
          onClick={() => {
            setMobileOpen(false);
            setPage('aboutMe');
          }}
        >
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="About Me" />
        </ListItem>
        <ListItem
          button
          className={page === 'portfolio' ? classes.activeLink : null}
          onClick={() => {
            setMobileOpen(false);
            setPage('portfolio');
          }}
        >
          <ListItemIcon>
            <ComputerIcon />
          </ListItemIcon>
          <ListItemText primary="Portfolio" />
        </ListItem>

        <ListItem
          button
          onClick={() => {
            setMobileOpen(false);
            setPage('contact');
          }}
          className={page === 'contact' ? classes.activeLink : null}
        >
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary="Contact" />
        </ListItem>
      </List>
      <Link
        href="https://drive.google.com/file/d/1TinQuUufep6jV8_FQt21q8ah02C0OUno/view?usp=sharing"
        target="_blank"
        color="inherit"
      >
        <ListItem button className={classes.menuListItem}>
          <ListItemIcon>
            <DescriptionIcon />
          </ListItemIcon>
          <ListItemText primary="Resume" />
        </ListItem>
      </Link>
      <Divider />
      <Box display="flex" justifyContent="center" m={3}>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          startIcon={<ImportantDevicesIcon />}
          onClick={() => {
            setMobileOpen(false);
            setPage('contact');
          }}
        >
          Hire Me
        </Button>
      </Box>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Built With React.js
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      {/* <Main /> */}
      {/* <Contact /> */}
      {keyToComponentMap[page]({
        goToPortfolio: () => setPage('portfolio'),
        goToContact: () => setPage('contact'),
      })}
      {/* <Portfolio /> */}
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const theme = createMuiTheme({
  palette: {
    primary: {
      main: cyan[500],
    },
    action: {
      hover: '#111821',
    },
    background: {
      paper: '#1e2a3a',
      default: '#111821',
    },
  },
  breakpoints: {
    values: {
      xs: 300,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

const App = () => (
  <ThemeProvider theme={theme}>
    <ResponsiveDrawer />
  </ThemeProvider>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
