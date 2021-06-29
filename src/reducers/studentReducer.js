import { createReducer } from "@reduxjs/toolkit";
import {
  findStudent,
  clearStudent,
  addStudent,
  editStudent,
  deleteStudent,
} from "../actions/studentAction";

const initialState = {
  students: [
    {
      id: 1,
      firstName: "Zubair",
      lastName: "Ali",
      email: "zubairkamboh9010@gmail.com",
      phone: "+923046068976",
      address: "Sargodha, Pakistan",
    },
    {
      id: 2,
      firstName: "Naveed",
      lastName: "Alam",
      email: "zubairkamboh9010@gmail.com",
      phone: "+923046068976",
      address: "Sargodha, Pakistan",
    },
    {
      id: 3,
      firstName: "Ali",
      lastName: "Raza",
      email: "zubairkamboh9010@gmail.com",
      phone: "+923046068976",
      address: "Sargodha, Pakistan",
    },
    {
      id: 4,
      firstName: "Tanya",
      lastName: "Trivedi",
      email: "tanya@gmail.com",
      phone: "+923046068976",
      address: "Sargodha, Pakistan",
    },
    {
      id: 5,
      firstName: "John",
      lastName: "Doe",
      email: "john@gmail.com",
      phone: "+923046068976",
      address: "Sargodha, Pakistan",
    },
  ],

  student: {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    phone: "",
  },
};

const studentReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(findStudent, (state, action) => {
      state.student = state.students.find(
        // eslint-disable-next-line eqeqeq
        (student) => student.id == action.payload
      );
    })
    .addCase(clearStudent, (state, action) => {
      state.student = {};
    })
    .addCase(addStudent, (state, action) => {
      state.students.push(action.payload);
      state.students.reverse();
    })
    .addCase(editStudent, (state, action) => {
      console.log(action);
      state.students = state.students.map((student) =>
        // eslint-disable-next-line eqeqeq
        student.id == action.payload.id ? action.payload : student
      );
    })
    .addCase(deleteStudent, (state, action) => {
      state.students = state.students.filter(
        (student) => student.id !== action.payload
      );
      console.log(action.payload);
    });
});

export default studentReducer;
