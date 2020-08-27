import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProjectCard from './ProjectCard';
import githubBattleGif from '../images/projects/github-battle.gif';
import githubBattlePng from '../images/projects/github-battle.png';
import todolistGif from '../images/projects/todolist.gif';
import todolistPng from '../images/projects/todolist.png';
import unsplashGif from '../images/projects/unsplash-api.gif';
import unsplashPng from '../images/projects/unsplash-api.png';
import countersPng from '../images/projects/counters.png';
import countersGif from '../images/projects/counters.gif';

const projectData = {
  githubApi: {
    img: githubBattlePng,
    gif: githubBattleGif,
    title: 'Github API Demo',
    text:
      'React App that makes requests to the Github API and fetches popular repos by programming laguage. Battle Component receives github names as inputs and searches github accounts asscociated with the given names. Then it calculates a score for each player based on the number of starred repos and followers and determins who won',
    link: 'https://practical-nightingale-6128ff.netlify.app',
  },
  todolist: {
    img: todolistPng,
    gif: todolistGif,
    title: 'Draggable Tasks with React, Redux, Node, MongoDB',
    text:
      'Create Read Update Delete Tasks App build with React. It also utilizes react-beautiful-dnd library that enables creation of draggable elements. You can rearange the tasks by clicking on them with a mouse or a finger on a touchpad or a smart phone and dragging them in a new position. All changes will persist in mondoDb database on MongoAtlas. The backend was written in Node.js In order to make asyncronous requests I used axios library. The frontend is also connected to the redux store and uses redux-thunk to make asynchronous requests to the server and then update the state.',
    link: 'https://musing-leavitt-70fc91.netlify.app/',
  },
  unsplashApi: {
    img: unsplashPng,
    gif: unsplashGif,
    title: 'Image Grid with Unsplash API and CSS Grid',
    text:
      'React App that calls unsplash api using private API key and fetches urls of images that match the search word entered in the search bar. Makes asyncronous requests via Axios library',
    link: 'https://pedantic-haibt-4dbd12.netlify.app/',
  },

  counters: {
    img: countersPng,
    gif: countersGif,
    title: 'Create Read Update Delete operations with custom form validation',
    text:
      'React App that demonstrates the use of state, props and custom hooks and custom form validation in React.js',
    link: 'https://jovial-thompson-a6ffad.netlify.app/',
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

  sectionTitle: {
    fontSize: 32,
    borderLeft: `5px solid ${theme.palette.primary.main}`,
    paddingLeft: '16px',
    margin: '2rem 0',
  },
}));

export default function Portfolio(props) {
  const classes = useStyles();

  window.scrollTo(0, 0);

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Container className={classes.container}>
        <Typography className={classes.sectionTitle} variant="h1" gutterBottom>
          All Projects
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
          <ProjectCard
            img={projectData.unsplashApi.img}
            gif={projectData.unsplashApi.gif}
            title={projectData.unsplashApi.title}
            text={projectData.unsplashApi.text}
            linkUrl={projectData.unsplashApi.link}
          />
          <ProjectCard
            img={projectData.counters.img}
            gif={projectData.counters.gif}
            title={projectData.counters.title}
            text={projectData.counters.text}
            linkUrl={projectData.counters.link}
          />
        </Box>
      </Container>
    </main>
  );
}
