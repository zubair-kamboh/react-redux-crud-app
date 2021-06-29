import React from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField, Paper, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addStudent } from "../../actions/studentAction";

import { Link } from "react-router-dom";

import { v4 as uuidv4 } from "uuid";

const AddStudent = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      id: uuidv4(),
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      phone: "",
    },
  });
  const onSubmit = (data) => {
    dispatch(addStudent(data));
    reset();
    history.push("/");
  };
  return (
    <div>
      <Paper>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            control={control}
            name="firstName"
            rules={{ required: true }}
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
            rules={{ required: true }}
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
            rules={{ required: true }}
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
            rules={{ required: true }}
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
            rules={{ required: true }}
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
              color="secondary"
              variant="outlined"
              component={Link}
              to="/"
              type="button"
            >
              Go Back
            </Button>
            <Button color="secondary" variant="contained" type="submit">
              Create new Student
            </Button>
          </div>
        </form>
      </Paper>
    </div>
  );
};

export default AddStudent;
