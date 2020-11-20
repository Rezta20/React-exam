import React, { useState } from "react";
import { Typography, InputBase } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

const useStyle = makeStyles((theme) => ({
  editableTitle: {
    marginLeft: theme.spacing(1),
  },
}));

export default function Title() {
  const [open, setOpen] = useState(false);
  const classes = useStyle();

  return (
    <div>
      {open ? (
        <div>
          <InputBase value="Todo" />
        </div>
      ) : (
        <div>
          <Typography
            onClick={() => setOpen(!open)}
            className={classes.editableTitle}
          >
            Todo
          </Typography>
          {/* <MoreHorizIcon /> */}
        </div>
      )}
    </div>
  );
}
