import { createAction } from "@reduxjs/toolkit";

export const findStudent = createAction("student/find");
export const clearStudent = createAction("student/clear");
export const addStudent = createAction("student/add");
export const editStudent = createAction("student/edit");
export const deleteStudent = createAction("student/delete");
