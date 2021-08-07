import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {CardWrapper, SomeWrapper} from "../style";
import {blue} from "@material-ui/core/colors";
import {Avatar} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard({info}) {

  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <SomeWrapper>
    <CardWrapper>
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          <Avatar alt="H" src="J" className={"avatar"}/> <strong>uid - {info.uid} </strong>
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          email - {info.email == null ? "not yet available" : info.email}
        </Typography>
        <Typography variant="body2" component="p">
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">gender - {info.gender == null ? "not yet available" : info.gender}</Button>
      </CardActions>
      <CardActions>
        <Button size="small">education - {info.education == null ? "not yet available" : info.education}</Button>
      </CardActions>
      <CardActions>
        <Button size="small">account type - {info.accountType === 1 ? "mentor" : "user"}</Button>
      </CardActions>
    </Card>
    </CardWrapper>
    </SomeWrapper>
  );
}
