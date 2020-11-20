import React from "react";
import { Paper, InputBase, IconButton, Button } from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import { makeStyles, fade } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  card: {
    margin: theme.spacing(0, 1, 1, 1),
    padding: theme.spacing(1, 1, 1, 0),
    paddingBottom: theme.spacing(3),
  },

  input: {
    margin: theme.spacing(1),
  },

  btnConfirm: {
    background: "#8F4586",
    color: "#fff",
    "&:hover": {
      background: fade("#8F4586", 0.6),
    },
  },

  Confirm: {
    margin: theme.spacing(0, 1, 1, 1),
  },
}));

export default function InputCard({ setOpen }) {
  const classes = useStyle();
  return (
    <div>
      <div>
        <Paper className={classes.card}>
          <InputBase
            multiline
            onBlur={() => setOpen(false)}
            fullWidth
            inputProps={{ className: classes.input }}
            placeholder="Enter a title of this card"
          />
        </Paper>
      </div>
      <div className={classes.Confirm}>
        <Button className={classes.btnConfirm} onClick={() => setOpen(false)}>
          Add Card
        </Button>
        <IconButton onClick={() => setOpen(false)}>
          <ClearIcon />
        </IconButton>
      </div>
    </div>
  );
}
