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
    document.getElementById('idMiImagen').src='https://img.freepik.com/vector-gratis/planeta-tierra-adorable-estilo-dibujo-mano_23-2147904384.jpg?w=2000'
}

const parsear = (id) => parseInt(document.getElementById(id).value);

function conceptosJS(){
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
}