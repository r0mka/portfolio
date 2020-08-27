import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DescriptionIcon from '@material-ui/icons/Description';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import ComputerIcon from '@material-ui/icons/Computer';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProjectCard from './ProjectCard';
// import Testimonial from './Testimonial';
import js from '../images/logos/vanilajs.svg';
import html from '../images/logos/html.svg';
import css from '../images/logos/css.svg';
import reactLogo from '../images/logos/react-logo.svg';
import node from '../images/logos/nodejs.svg';
import materialUi from '../images/logos/material-ui.svg';
import bootstrap from '../images/logos/bootstrap.svg';
import typescript from '../images/logos/typescript.svg';
import aws from '../images/logos/aws.svg';
import redux from '../images/logos/redux.svg';
import python from '../images/logos/python.svg';
import BackgroundHeader from '../images/background/1.jpg';
import githubBattleGif from '../images/projects/github-battle.gif';
import githubBattlePng from '../images/projects/github-battle.png';
import todolistGif from '../images/projects/todolist.gif';
import todolistPng from '../images/projects/todolist.png';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';

const projectData = {
  githubApi: {
    img: githubBattlePng,
    gif: githubBattleGif,
    title: 'Github API Demo',
    text:
      'Makes requests to the Github API and fetches popular repos by programming laguage. Battle Component receives github names as inputs and searches github accounts asscociated with the given names. Then it calculates a score for each player based on the number of starred repos and followers and determins who won',
    link: 'https://practical-nightingale-6128ff.netlify.app',
  },
  todolist: {
    img: todolistPng,
    gif: todolistGif,
    title: 'Draggable Tasks with React, Redux, Node, MongoDB',
    text:
      'You can Create Read Update Delete Tasks. It also utilizes react-beautiful-dnd library that enables creation of draggable elements. You can rearange the tasks by clicking on them with a mouse or a finger on a touchpad or on a smart phone and dragging them in a new position. All changes will persist in mondoDb database on MongoAtlas. The backend was written in Node.js In order to make asyncronous requests I used axios library. The frontend is also connected to the redux store and uses redux-thunk to make asynchronous requests to the server and then update the state.',
    link: 'https://musing-leavitt-70fc91.netlify.app/',
  },
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },

  // necessary for content to be below app bar
  toolbar: {
    ...theme.mixins.toolbar,
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },

  content: {
    flexGrow: 1,
    color: theme.palette.grey[400],
    '& h2': {
      color: theme.palette.common.white,
    },
  },
  container: {
    padding: 64,
    [theme.breakpoints.down('xs')]: {
      padding: 12,
    },
  },
  hero: {
    padding: 64,
    backgroundImage:
      'linear-gradient(rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0)), url(' +
      BackgroundHeader +
      ')',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    [theme.breakpoints.down('xs')]: {
      padding: 12,
    },
  },
  nameHeading: {
    fontSize: '32px',
  },

  intro: {
    [theme.breakpoints.up('sm')]: {
      width: '550px',
      fontSize: '18px',
    },
  },
  subtitle: {
    fontSize: 24,
    color: theme.palette.primary.main,
  },

  sectionTitle: {
    fontSize: 32,
    borderLeft: `5px solid ${theme.palette.primary.main}`,
    paddingLeft: '16px',
    margin: '2rem 0',
  },

  button: {
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },

  article: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    margin: '64px 0',
    padding: 0,
    '& > *': {
      width: theme.spacing(30),
      height: theme.spacing(30),
    },
  },
  skillCard: {
    margin: '16px 0',
  },
}));

export default function Main({ goToPortfolio, goToContact }) {
  window.scrollTo(0, 0);

  const classes = useStyles();
  const theme = useTheme();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Container className={`${classes.hero}`}>
        <Typography variant="h2" gutterBottom className={classes.nameHeading}>
          Roman Nikolaenkov
        </Typography>
        <Typography className={classes.subtitle} gutterBottom>
          Software Engineer
        </Typography>
        <Typography paragraph gutterBottom className={classes.intro}>
          I'm a software engineer based in Los Angeles, CA and specialized in
          frontend development for complex scalable web apps. I am currently
          learning backend development with NodeJS and TypeScript. Want to know
          how I may help your project? Check out my project portfolio and online
          resume.
        </Typography>
        <Box my={5}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            startIcon={<ComputerIcon />}
            onClick={goToPortfolio}
          >
            View Portfolio
          </Button>
          <Button
            variant="outlined"
            color="primary"
            className={classes.button}
            startIcon={<DescriptionIcon />}
          >
            <Link
              href="https://drive.google.com/file/d/1TinQuUufep6jV8_FQt21q8ah02C0OUno/view?usp=sharing"
              target="_blank"
              color="inherit"
            >
              View Resume
            </Link>
          </Button>
        </Box>
      </Container>
      <Container className={classes.container}>
        <Typography className={classes.sectionTitle} variant="h3" gutterBottom>
          What I do
        </Typography>
        <Typography paragraph>
          Below is a quick overview of my main technical skill sets and
          technologies I use. Want to find out more about my experience? Check
          out my online resume and project portfolio.
        </Typography>

        <Box className={classes.article}>
          <Paper elevation={3} className={classes.skillCard}>
            <Box
              height="100%"
              display="flex"
              flexDirection="column"
              justifyContent="space-around"
            >
              <Box display="flex" justifyContent="center">
                <img width="100px" heigh="100px" src={js} alt="javascript" />
              </Box>
              <Box color={theme.palette.grey[400]} my={2}>
                <Typography align="center" variant="h5">
                  JAVASCRIPT
                </Typography>
              </Box>
            </Box>
          </Paper>
          <Paper elevation={3} className={classes.skillCard}>
            <Box
              height="100%"
              display="flex"
              flexDirection="column"
              justifyContent="space-around"
            >
              <Box display="flex" justifyContent="center">
                <img width="100px" height="100px" src={html} alt="html" />
                <img width="100px" height="100px" src={css} alt="css" />
              </Box>
              <Box color={theme.palette.grey[400]} my={2}>
                <Typography align="center" variant="h5">
                  HTML CSS
                </Typography>
              </Box>
            </Box>
          </Paper>
          <Paper elevation={3} className={classes.skillCard}>
            <Box
              height="100%"
              display="flex"
              flexDirection="column"
              //   justifyContent="space-around"
            >
              <Box display="flex" justifyContent="center">
                <img width="155px" height="155px" src={reactLogo} alt="react" />
              </Box>
              <Box color={theme.palette.grey[400]} my={2}>
                <Typography align="center" variant="h5">
                  REACT.JS
                </Typography>
              </Box>
            </Box>
          </Paper>
          <Paper elevation={3} className={classes.skillCard}>
            <Box
              height="100%"
              display="flex"
              flexDirection="column"
              justifyContent="space-around"
            >
              <Box display="flex" justifyContent="center">
                <img width="100px" height="100px" src={node} alt="node" />
              </Box>
              <Box color={theme.palette.grey[400]} my={2}>
                <Typography align="center" variant="h5">
                  NODE.JS
                </Typography>
              </Box>
            </Box>
          </Paper>
          <Paper elevation={3} className={classes.skillCard}>
            <Box
              height="100%"
              display="flex"
              flexDirection="column"
              justifyContent="space-around"
            >
              <Box display="flex" justifyContent="center">
                <img
                  width="100px"
                  height="100px"
                  src={materialUi}
                  alt="material-ui"
                />
              </Box>
              <Box color={theme.palette.grey[400]} my={2}>
                <Typography align="center" variant="h5">
                  MATERIAL-UI
                </Typography>
              </Box>
            </Box>
          </Paper>
          <Paper elevation={3} className={classes.skillCard}>
            <Box
              height="100%"
              display="flex"
              flexDirection="column"
              justifyContent="space-around"
            >
              <Box display="flex" justifyContent="center">
                <img
                  width="100px"
                  height="100px"
                  src={bootstrap}
                  alt="bootstrap"
                />
              </Box>
              <Box color={theme.palette.grey[400]} my={2}>
                <Typography align="center" variant="h5">
                  BOOTSTRAP
                </Typography>
              </Box>
            </Box>
          </Paper>
          <Paper elevation={3} className={classes.skillCard}>
            <Box
              height="100%"
              display="flex"
              flexDirection="column"
              justifyContent="space-around"
            >
              <Box display="flex" justifyContent="center">
                <img width="100px" height="100px" src={redux} alt="bootstrap" />
              </Box>
              <Box color={theme.palette.grey[400]} my={2}>
                <Typography align="center" variant="h5">
                  REDUX
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Box>
      </Container>
      <Divider />
      <Container className={classes.container}>
        <Typography className={classes.sectionTitle} variant="h3" gutterBottom>
          Currently Learning
        </Typography>
        <Box className={classes.article}>
          <Paper elevation={3} className={classes.skillCard}>
            <Box
              height="100%"
              display="flex"
              flexDirection="column"
              justifyContent="space-around"
            >
              <Box display="flex" justifyContent="center">
                <img
                  width="100px"
                  height="100px"
                  src={typescript}
                  alt="typescript"
                />
              </Box>
              <Box color={theme.palette.grey[400]} my={2}>
                <Typography align="center" variant="h5">
                  TYPESCRIPT
                </Typography>
              </Box>
            </Box>
          </Paper>
          <Paper elevation={3} className={classes.skillCard}>
            <Box
              height="100%"
              display="flex"
              flexDirection="column"
              justifyContent="space-around"
            >
              <Box display="flex" justifyContent="center">
                <img
                  width="100px"
                  height="100px"
                  src={aws}
                  alt="amazon web services"
                />
              </Box>
              <Box color={theme.palette.grey[400]} my={2}>
                <Typography align="center" variant="h5">
                  AWS
                </Typography>
              </Box>
            </Box>
          </Paper>
          <Paper elevation={3} className={classes.skillCard}>
            <Box
              height="100%"
              display="flex"
              flexDirection="column"
              justifyContent="space-around"
            >
              <Box display="flex" justifyContent="center">
                <img
                  width="100px"
                  height="100px"
                  src={python}
                  alt="python programming language"
                />
              </Box>
              <Box color={theme.palette.grey[400]} my={2}>
                <Typography align="center" variant="h5">
                  PYTHON
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Box>
        <Box align="center">
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            startIcon={<ImportantDevicesIcon />}
            onClick={goToContact}
          >
            Hire Me
          </Button>
        </Box>
      </Container>
      <Divider />

      <Container className={classes.container}>
        <Typography className={classes.sectionTitle} variant="h3" gutterBottom>
          Featured Projects
        </Typography>
        <Box display="flex" flexWrap="wrap" justifyContent="space-between">
          <ProjectCard
            img={projectData.githubApi.img}
            gif={projectData.githubApi.gif}
            title={projectData.githubApi.title}
            text={projectData.githubApi.text}
            linkUrl={projectData.githubApi.link}
          />
          <ProjectCard
            img={projectData.todolist.img}
            gif={projectData.todolist.gif}
            title={projectData.todolist.title}
            text={projectData.todolist.text}
            linkUrl={projectData.todolist.link}
          />
        </Box>
      </Container>
      {/* <Container className={classes.container}>
        <Typography className={classes.sectionTitle} variant="h3" gutterBottom>
          Testimonials
        </Typography>

        <Box display="flex" flexWrap="wrap" justifyContent="space-between">
          <Testimonial
            name="Viktor"
            text="Roman is a brilliant front end developer! Roman is a brilliant front end developer! Roman is a brilliant front end developer! Roman is a brilliant front end developer! Roman is a brilliant front end developer!"
          />

          <Testimonial
            name="Viktor's Twin"
            text="Roman is a brilliant front end developer! Roman is a brilliant front end developer! Roman is a brilliant front end developer! Roman is a brilliant front end developer! Roman is a brilliant front end developer!"
          />

          <Testimonial
            name="Viktor's Ghost"
            text="Roman is a brilliant front end developer! Roman is a brilliant front end developer! Roman is a brilliant front end developer! Roman is a brilliant front end developer! Roman is a brilliant front end developer!"
          />
        </Box>
      </Container> */}
    </main>
  );
}
