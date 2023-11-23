function sumarNumerosCompleto(){
    var n1 = parseInt(document.getElementById('idNumero1').value);
    var n2 = parseInt(document.getElementById('idNumero2').value);

    console.log('Funcion sumar números'+n1)
    console.log('Funcion sumar números'+n2)
    var resultado = n1 + n2;
    console.log(resultado)
    document.getElementById('idResultado2').innerText = resultado;
}

function restarNumeros(){
    var n1 = parseInt(document.getElementById('idNumero1').value);
    var n2 = parseInt(document.getElementById('idNumero2').value);

    console.log('Funcion restar números'+n1)
    console.log('Funcion restar números'+n2)
    var resultado = n1 - n2;
    console.log(resultado)
    document.getElementById('idResultado2').innerText = resultado;
}

function multiplicarNumeros(){
    var n1 = parseInt(document.getElementById('idNumero1').value);
    var n2 = parseInt(document.getElementById('idNumero2').value);

    console.log('Funcion restar números'+n1)
    console.log('Funcion restar números'+n2)
    var resultado = n1 * n2;
    console.log(resultado)
    document.getElementById('idResultado2').innerText = resultado;
}

function dividirNumeros(){
    var n1 = parseInt(document.getElementById('idNumero1').value);
    var n2 = parseInt(document.getElementById('idNumero2').value);

    console.log('Funcion restar números'+n1)
    console.log('Funcion restar números'+n2)
    if (n2 !== 0) {
        var resultado = n1 / n2;
    }else{
        var resultado = 0
    }
    console.log(resultado)
    document.getElementById('idResultado2').innerText = resultado;
}

function cambiarImg(){
    document.getElementById('idMiImagen').src='https://img.freepik.com/vector-gratis/planeta-tierra-adorable-estilo-dibujo-mano_23-2147904384.jpg?w=2000'
}