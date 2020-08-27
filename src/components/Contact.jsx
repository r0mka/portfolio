import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import cyan from '@material-ui/core/colors/cyan';

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
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      padding: 12,
    },
  },
  paperWrapper: {
    color: 'inherit',
    padding: theme.spacing(10),
    maxWidth: '700px',
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(1),
    },
  },

  sectionTitle: {
    fontSize: 32,
    color: theme.palette.primary.main,
    textAlign: 'center',
    marginBottom: theme.spacing(6),
    textTransform: 'uppercase',
  },
  contactInfo: {
    fontSize: 18,
    fontWeight: theme.typography.fontWeightLight,
    marginBottom: theme.spacing(8),
    textAlign: 'center',
  },
  emailLink: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    color: cyan[500],
  },
  socialIcons: {
    '& a ': {
      padding: theme.spacing(1),
    },
    [theme.breakpoints.down('xs')]: {
      width: '80%',
    },
  },
}));

export default function Contact(props) {
  window.scrollTo(0, 0);

  const classes = useStyles();
  // const theme = useTheme();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />

      <Container className={classes.container}>
        <Paper className={classes.paperWrapper}>
          <Typography
            className={classes.sectionTitle}
            variant="h1"
            gutterBottom
          >
            Contact
          </Typography>
          <Typography paragraph gutterBottom className={classes.contactInfo}>
            Interested in hiring me for your project or just want to say hi? You
            can send me an email to
            <Link
              href="mailto:romanliveshere@gmail.com"
              target="_blank"
              color="inherit"
              className={classes.emailLink}
            >
              romanliveshere@gmail.com
            </Link>
            or call
            <Link
              href="tel:213-422-0423"
              color="inherit"
              className={classes.emailLink}
            >
              +1(213)422-0423
            </Link>
          </Typography>
          <Typography paragraph gutterBottom className={classes.contactInfo}>
            Want to get connected? Follow me on the social channels below.
          </Typography>
          <Box
            display="flex"
            justifyContent="space-around"
            width="40%"
            margin="2rem auto"
            className={classes.socialIcons}
          >
            <Link
              href="https://github.com/r0mka/"
              target="_blank"
              color="inherit"
            >
              <GitHubIcon style={{ fontSize: 40, color: cyan[500] }} />
              <Typography>Github</Typography>
            </Link>
            <Link
              href="https://linkedin.com/in/r0mka"
              target="_blank"
              color="inherit"
            >
              <LinkedInIcon style={{ fontSize: 40, color: cyan[500] }} />
              <Typography>Linkedin</Typography>
            </Link>
          </Box>
        </Paper>
      </Container>
    </main>
  );
}
