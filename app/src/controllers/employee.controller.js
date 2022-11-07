'use strict'
import {pool} from "../database/database.js";

/**
 * Crear empleado
 */
export const createEmployee = async (req, res) => {
    try {
        const {
            nit,
            nombre,
            apellido1,
            apellido2,
            codigo_departamento
        } = req.body;
        await pool.query("INSERT INTO EMPLEADOS (nit, nombre, apellido1, apellido2, codigo_departamento) VALUES ($1, $2, $3, $4, $5)", [
            nit, nombre, apellido1, apellido2, codigo_departamento
        ]);
        res.status(200).json({
            message: 'Empleado agregado satisfactoriamente'
        });
    } catch (error) {
        return res.status(500).json({message : error.message});
    }
}

/**
 * Obtener todos los empleados
 * @param {*} req 
 * @param {*} res 
*/
export const readEmployees = async (req, res) => {
    try {
        const employees = await pool.query("SELECT * FROM EMPLEADOS");
        res.status(200).json(employees.rows);
    } catch (error) {
        return res.status(500).json({message : error.message});
    }
}

/**
 * Obtener empleado
 * @param {*} req 
 * @param {*} res 
*/
export const readEmployee = async (req, res) => {
    const {codigo} = req.params;
    try {
        const employeeFinded = await pool.query("SELECT * FROM EMPLEADOS WHERE codigo = $1", [codigo]);
        res.status(200).json(employeeFinded.rows);
    } catch (error) {
        return res.status(500).json({message : error.message});
    }
}

/**
 * Actualiza un empleado
 * @param {*} req 
 * @param {*} res 
*/
export const updateEmployee = async (req, res) => {
    const {codigo} = req.params;
    try {
        const {
            nit,
            nombre,
            apellido1,
            apellido2,
            codigo_departamento
        } = req.body;
        await pool.query("UPDATE EMPLEADOS SET nit = $1, nombre = $2, apellido1 = $3, apellido2 = $4, codigo_departamento = $5 WHERE codigo = $6", [
            nit,
            nombre,
            apellido1,
            apellido2,
            codigo_departamento,
            codigo
        ]);
        res.status(200).json({
            message: "Usuario actualizado satisfactoriamente"
        });
    } catch (error) {
        return res.status(500).json({message : error.message});
    }
}

/**
 * Elimina un empleado
*/
export const deleteEmployee = async (req, res) => {
    const {codigo} = req.params;
    try {
        await pool.query("DELETE FROM EMPLEADOS WHERE codigo = $1", [
            codigo
        ]);
        res.status(200).json({
            message: "Empleado eliminado satisfactoriamente"
        });
    } catch (error) {
        return res.status(500).json({message : error.message});
    }
}