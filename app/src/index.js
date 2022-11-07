'use strict'

// Gracias a usar type : module se puede usar import
import app from './app.js';

main();

async function main() {
    try {
        // Inicio del servidor
        const port = 1234;
        app.listen(port);
        console.log('Server is listen on port ', port);
    } catch(error) {
        console.error('Unable to connect to the database:', error);
    }
}