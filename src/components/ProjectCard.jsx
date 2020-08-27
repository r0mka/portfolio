import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  root: {
    // flex: 1,
    maxWidth: '47%',
    margin: '32px 0',
    color: theme.palette.grey[400],
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%',
    },
  },
}));

export default function ImgMediaCard({ img, gif, title, text, linkUrl }) {
  const classes = useStyles();
  // const theme = useTheme();

  const [hovering, setHovering] = React.useState(false);

  return (
    <Card
      className={classes.root}
      onMouseOver={() => setHovering(true)}
      onMouseOut={() => setHovering(false)}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          alt={title}
          height="280"
          image={hovering ? gif : img}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" component="p">
            {text}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <Link href={linkUrl} target="_blank" color="inherit">
            Live Demo
          </Link>
        </Button>
        {/* <Button size="small" color="primary">
          Learn More
        </Button> */}
      </CardActions>
    </Card>
  );
}
