'use strict'

import { Router } from "express";
import {
    createEmployee, 
    readEmployees, 
    readEmployee, 
    updateEmployee, 
    deleteEmployee
} from "../controllers/employee.controller.js";

const routerEmployee = Router();

// Crear empleado
routerEmployee.post("/employee", createEmployee);
// Mostrar empleados
routerEmployee.get("/employee", readEmployees);
// Mostrar un empleado
routerEmployee.get("/employee/:codigo", readEmployee);
// Actualizar empleado
routerEmployee.put("/employee/:codigo", updateEmployee);
// Eliminar empleado
routerEmployee.delete("/employee/:codigo", deleteEmployee);

export default routerEmployee;