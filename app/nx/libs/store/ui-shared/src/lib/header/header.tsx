import { Toolbar, Typography } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import './header.module.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
export interface HeaderProps {
  title: string;
}

export const Header = (props: HeaderProps) => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          {props.title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
