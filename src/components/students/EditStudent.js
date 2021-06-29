import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField, Paper, Button } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import {
  clearStudent,
  editStudent,
  findStudent,
} from "../../actions/studentAction";

const EditStudent = ({ match }) => {
  let history = useHistory();
  const student = useSelector((state) => state.students.student);

  const dispatch = useDispatch();

  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      phone: "",
    },
  });

  useEffect(() => {
    dispatch(findStudent(match.params.id));

    return () => dispatch(clearStudent());
  }, []);

  useEffect(() => {
    reset(student);
  }, [student]);

  const onSubmit = (data) => {
    console.log(data);
    // dispatch action here
    dispatch(editStudent(data));

    history.push("/");
  };

  return (
    <div>
      <Paper>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            control={control}
            name="firstName"
            render={({ field }) => (
              <TextField
                id="first-name"
                label="First Name"
                variant="outlined"
                placeholder="Enter Your First Name"
                fullWidth
                margin="normal"
                {...field}
              />
            )}
          />

          <Controller
            control={control}
            name="lastName"
            render={({ field }) => (
              <TextField
                id="last-name"
                label="Last Name"
                variant="outlined"
                placeholder="Enter Your Last Name"
                fullWidth
                margin="normal"
                {...field}
              />
            )}
          />
          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <TextField
                id="email"
                label="E-mail"
                variant="outlined"
                placeholder="Enter Your E-mail Address"
                fullWidth
                margin="normal"
                {...field}
              />
            )}
          />
          <Controller
            control={control}
            name="address"
            render={({ field }) => (
              <TextField
                id="address"
                label="Address"
                variant="outlined"
                placeholder="Enter Your Address"
                fullWidth
                margin="normal"
                {...field}
              />
            )}
          />
          <Controller
            control={control}
            name="phone"
            render={({ field }) => (
              <TextField
                id="phone-number"
                label="Phone Number"
                variant="outlined"
                placeholder="Enter Your Phone Number"
                fullWidth
                margin="normal"
                {...field}
              />
            )}
          />
          <div>
            <Button
              variant="outlined"
              component={Link}
              to="/"
              color="secondary"
              type="button"
            >
              Go Back
            </Button>
            <Button variant="contained" color="secondary" type="submit">
              Update Student
            </Button>
          </div>
        </form>
      </Paper>
    </div>
  );
};

export default EditStudent;
