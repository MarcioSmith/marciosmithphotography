import React from 'react';
import Link from 'next/link'

import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link href="/">
              <a>Home2</a>
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
