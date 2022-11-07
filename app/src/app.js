'use strict'

import express from 'express';
import routerEmployee from "./routes/employee.routes.js";
import routerDepartment from "./routes/department.routes.js"

const app = express();

// Middlewares
app.use(express.json());

app.use(routerEmployee);
app.use(routerDepartment);

export default app;