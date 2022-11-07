'use strict'

import pkg from "pg";
const {Pool} = pkg;
 
/**
 * Conexion con la base de datos
 */
export const pool = new Pool({
    host: "db",
    user: "docker",
    password: "my-secret-pw",
    database: "cobrando_bpo",
    port: "5432"
}); 