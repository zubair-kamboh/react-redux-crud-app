import EditIcon from "@material-ui/icons/Edit";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import VisibilityIcon from "@material-ui/icons/Visibility";
import {
  Box,
  Button,
  Grid,
  Paper,
  Typography,
  IconButton,
} from "@material-ui/core";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { deleteStudent } from "../../actions/studentAction";

const StudentItem = ({ item }) => {
  const dispatch = useDispatch();
  // const dispatch = useDispatch();
  const handleDelete = (id) => {
    // delete item code
    dispatch(deleteStudent(id));
  };

  return (
    <Grid xs={12} sm={6} lg={3} md={4} item>
      <Paper>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="subtitle2" gutterBottom>
            {item.firstName} {item.lastName}
          </Typography>
          <IconButton
            component={Link}
            color="secondary"
            to={`/students/${item.id}`}
          >
            <VisibilityIcon />
          </IconButton>
        </Box>
        <Typography variant="caption">{item.phone}</Typography>
        <Typography variant="caption">{item.email}</Typography>
        <Typography variant="caption">{item.address}</Typography>
        <Button
          component={Link}
          to={`/students/${item.id}/edit`}
          variant="outlined"
          color="secondary"
          startIcon={<EditIcon />}
        >
          edit
        </Button>
        <Button
          startIcon={<DeleteOutlineIcon />}
          onClick={() => handleDelete(item.id)}
          color="secondary"
          variant="contained"
        >
          delete
        </Button>
      </Paper>
    </Grid>
  );
};

export default StudentItem;
