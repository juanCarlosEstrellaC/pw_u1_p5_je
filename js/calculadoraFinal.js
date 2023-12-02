let cadenaOp = "";
let res = 0;

function digito(dig) {
    cadenaOp = cadenaOp + dig;
    document.getElementById("idResetear").innerText = cadenaOp
}

function igual() {
    res = eval(cadenaOp)
    console.log(res);
    document.getElementById("idResetear").innerText = res
    return res;
}

function resetear() {
    cadenaOp = "";
    res = 0;
    document.getElementById("idResetear").innerText = cadenaOp
}