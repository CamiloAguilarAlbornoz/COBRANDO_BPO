'use strict'

import {pool} from "../database/database.js";

/**
 * Obtiene todos los empleados por  cada departamento
 * @param {*} req 
 * @param {*} res 
 */
export const getAllEmployeesWithDepartment = async (req, res) => {
    try {
        const employeesFinded = await pool.query("SELECT D.nombre, (E.nombre ||' '|| E.apellido1) AS Apellido FROM DEPARTAMENTOS D, EMPLEADOS E WHERE D.codigo = E.codigo_departamento");
        res.status(200).json(employeesFinded.rows);
    } catch (error) {
        return res.status(500).json({message : error.message});
    }
}

export const getAllEmployeesByDepartment = async (req, res) => {
    const {codigo} = req.params;
    try {
        const employeesFinded = await pool.query("SELECT * FROM EMPLEADOS WHERE codigo_departamento = $1", [codigo]);
        res.status(200).json(employeesFinded.rows);
    } catch (error) {
        return res.status(500).json({message : error.message});
    }   
}