// const = constante
const sumar = (n1, n2) => n1 + n2;

const sumarCompleto = () => {
    var resultado = parsear('idNumero1') + parsear('idNumero2')
    console.log(resultado)
    document.getElementById('idResultado2').innerText = resultado;
}

const restarCompleto = () => {
    var resultado = parsear('idNumero1') - parsear('idNumero2')
    console.log(resultado)
    document.getElementById('idResultado2').innerText = resultado;
}

const multiplicarCompleto = () => {
    var resultado = parsear('idNumero1') * parsear('idNumero2')
    console.log(resultado)
    document.getElementById('idResultado2').innerText = resultado;
}

const dividirCompleto = () => {
    var resultado = parsear('idNumero1') / parsear('idNumero2')
    console.log(resultado)
    document.getElementById('idResultado2').innerText = resultado;
}

const cambiarImg = () => {
    document.getElementById('idMiImagen').src = 'https://img.freepik.com/vector-gratis/planeta-tierra-adorable-estilo-dibujo-mano_23-2147904384.jpg?w=2000'
}

const parsear = (id) => parseInt(document.getElementById(id).value);

function conceptosJS() {
    // let 
    let var1 = 10;
    let var1Texto = 'texto 1';
    console.log(var1);
    console.log(var1Texto);

    // var es tipo de dato que está quedando en desuso.
    var var2 = 10;
    var var2Texto = 'texto 2';
    console.log(var2);
    console.log(var2Texto);

    //CONSTANTES:
    const const1 = 10;
    const const1Texto = 'Texto 3'; //comillas simples o dobles
    console.log(const1);
    console.log(const1Texto);

    // Declaración de arreglos
    const diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];
    console.log(diasSemana)
    console.log(diasSemana[0]);
    console.log(diasSemana[4]);
    console.log(diasSemana[5]);
    diasSemana[5] = "Sabado"
    diasSemana.push("Domingo") // push = agrega al final
    diasSemana.unshift("Feriado") // unshift = agrega al inicio
    console.log(diasSemana);

    const edades = [1, 2, 3, 4, 5]
    console.log(edades);

    const edades2 = [6, 7, 8]
    console.log(edades2);

    const edadesFinales = edades.concat(edades2)
    console.log(edadesFinales);

    // FOR EACH
    for (const dia of diasSemana) {
        console.log(dia);

        // Condicional IF
        if (dia === 'Martes') {
            console.log("Martes 2x1");
        }
    }


    //Declaracion de Objetos
    const estudiante = {
        nombre: "Edison",
        apellido: "Cayambe",
        edad: 34,
        genero: "M",
        ciudad: "Quito"
    }

    // Settear y gettear
    console.log(estudiante);
    console.log(estudiante.apellido);
    estudiante.nombre = "Roberto"
    console.log(estudiante.nombre);

    const persona = {
        nombre: "Edison",
        apellido: "Cayambe",
        direccion: {
            callePrincipal: "America",
            calleSecuandaria: "Rumipamba",
            numeracion: "oe3-80",
            barrio: "Mariana de Jesús"
        }
    }
    console.log(persona);
    console.log(persona.direccion.barrio);

    console.log("***Ejercicio en clase N1***");
    //Arreglo de 4 pacientes con 3 atributos
    //Mio:
    const paciente1 = {
        nombre: "Maria",
        apellido: "Solórzano",
        edad: 58,
    }
    const paciente2 = {
        nombre: "Jose",
        apellido: "Landázuri",
        edad: 90,
    }
    const paciente3 = {
        nombre: "Marco",
        apellido: "Bonilla",
        edad: 25,
    }

    const listaPacientes = [paciente1, paciente2, paciente3]
    console.log(listaPacientes);
    console.table(listaPacientes)
    console.log(listaPacientes[2].apellido);

    //Profe
    const pacientes = [{ nombre: "Maria", apellido: "Solórzano" }, { nombre: "Jose", apellido: "Landázuri" }]
    console.table(pacientes)
    console.table(pacientes[0].nombre)

    pacientes.pop()      // POP: Eliminar el último de la lista
    console.table(pacientes)

    // DESESTRUCTURACIÓN DE ARREGLOS:(dividir arreglos en partes individuales)
    const diasSemana2 = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];
    const [dia1, dia2, dia3, dia4, dia5] = diasSemana2
    console.log(dia5);

    // Desestructuracion más optima
    const [d1, d2, d3, d4, d5] = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];
    console.log(d2);

    // DESESTRUCTURACIÓN DE OBJETOS:
    const vehiculo = {
        marca: "Toyota",
        modelo: "Prius",
        anio: 2022
    }
    const { marca, modelo, anio } = vehiculo
    console.log(marca);

    console.log("***Ejercicio en clase N2***");
    // En una sola línea, hacer 1 obj que tenga como atributo otro obj. Desestructurar en 1 línea
    const computadora = { marcaC: "Lenovo", anioC: 2023, so: { tipoSO: "x64", nombreSO: "Windows 11" } }
    console.log(computadora);

    const { marcaC, anioC, so: { tipoSO, nombreSO } } = { marcaC: "Lenovo", anioC: 2023, so: { tipoSO: "x64", nombreSO: "Windows 11" } };

}