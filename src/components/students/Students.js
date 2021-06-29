import React from "react";
import { Grid, Fab, makeStyles } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import StudentItem from "./StudentItem";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    left: "50%",
    bottom: "30%",
    transform: "translate(-50%,-20%)",
  },
}));

const Students = () => {
  const classes = useStyles();

  const students = useSelector((state) => state.students.students);

  return (
    <>
      <Grid spacing={2} container>
        {students.map((item, index) => (
          <StudentItem item={item} key={index} />
        ))}
      </Grid>
      <Fab
        component={Link}
        to="/students/create"
        color="secondary"
        className={classes.fab}
      >
        <AddIcon />
      </Fab>
    </>
  );
};

export default Students;
