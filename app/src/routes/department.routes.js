'use strict'

import { Router } from "express";
import {getAllEmployeesByDepartment, getAllEmployeesWithDepartment} from "../controllers/department.controller.js";

const routerDepartment = Router();

// Mostrar todos los empleados por cada departamento
routerDepartment.get("/department/employee", getAllEmployeesWithDepartment);
// Muestra todos los empleados de un departamento ingresado en la url
routerDepartment.get("/department/:codigo/employee", getAllEmployeesByDepartment);

export default routerDepartment;