import { Button, Paper, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { clearStudent, findStudent } from "../../actions/studentAction";
import { Link } from "react-router-dom";

const Student = ({ match }) => {
  const dispatch = useDispatch();
  const student = useSelector((state) => state.students.student);

  const { firstName, lastName, email, phone, address } = student;

  useEffect(() => {
    dispatch(findStudent(match.params.id));

    return () => {
      dispatch(clearStudent());
    };
  }, []);

  return (
    <Paper>
      <Typography variant="h2" gutterBottom>
        {firstName} {lastName}
      </Typography>

      <Typography variant="h5" gutterBottom>
        {email}
      </Typography>
      <Typography variant="h5" gutterBottom>
        {phone}
      </Typography>
      <Typography variant="h5" gutterBottom>
        {address}
      </Typography>

      <Button component={Link} to="/" color="secondary" variant="contained">
        Go Back
      </Button>
    </Paper>
  );
};

export default Student;
