/*Importación de clases*/
import { Cliente } from "./Cliente.js";
import { Empleado } from "./Empleados/Empleado.js";
import { Gerente } from "./Empleados/Gerente.js";
import { Director } from "./Empleados/Director.js";
import { SistemaAutenticacion } from "./SistemaAutenticacion.js";

const cliente = new Cliente("Jorge", "13804050", "123224");

const empleado = new Empleado("Miranda", "12312313", 10000);
const gerente = new Gerente("Jorge", "123456",12000);
const director = new Director("Jorge Miranda Morones", "987654",15000);

cliente.asignarClave('1234');

console.log(SistemaAutenticacion.login(cliente,'1234'));
