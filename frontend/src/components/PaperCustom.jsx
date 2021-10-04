import React from 'react';
import { makeStyles } from '@mui/styles';
import { Paper } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      height: theme.spacing(16),
    },
  },
}));

export default function PaperCustom() {
  return <Paper elevation={3} />
}
