// Imprimir por consola el objeto Vue.
console.log("Imprimo los elementos del objeto Vue:");
console.log(Vue);       // Vue es un objeto

// Array de objetos estudiantes:
const estudiantes = [
    { nombre: 'Edison', apellido: 'Cayambe' },
    { nombre: 'Daniel', apellido: 'Oviedo' },
    { nombre: 'Karla', apellido: 'Perez' },
    { nombre: 'Julio', apellido: 'Castillo' },
    { nombre: '', apellido: 'Teran' },
]
console.log(estudiantes);
console.table(estudiantes)

// CREAR una instancia de Vue: 
// ""app" es una instancia de Vue. Luego, usando mount, se monta en el DOM.
const app = Vue.createApp({
    // No es buena práctica poner codigo HTML aquÍ:
    /*  template: `
     <h1>Hola mundo</h1>
     <p>Desde App.js</p>
     <h6>{{1+1}}</h6>
     <p>{{ [1,2,3,4,5,6,7,8] }}</p>
     <p>{{ false?'Verdadero':'Falso'}}</p>
     ` 
     */

    methods: {
        cambiarMensaje() {
            console.log("Mensaje actual: " + this.mensaje);
            console.log("Se está cambiando el mensaje.");
            this.mensaje = "Valor cambiado"
            console.log("Nuevo Mensaje: " + this.mensaje);
        },
        cambiarNumero() {
            this.valor = this.valor + 1;
            console.log(this.valor);
        },
        agregarEstudiante() {
            console.log("Agregando estudiante.")
            const estu = { nombre: this.nombre, apellido: this.apellido }    // Añadado un objeto estudiante:
            this.lista.push(estu)       // Push añade un elemento al final del array y Unshift al inicio.
        },
        presionandoTecla({ charCode }) { // event es un argumento por defecto, no es necesario ponerlo
            console.log("presionando...");
            console.log(charCode);
        },
        agregarEstudianteMod() { // event es un argumento por defecto, no es necesario ponerlo
            console.log(nombre);
            console.log("presionando 2...");
        },
        metodoApellido(event) {  // event es un argumento por defecto, no es necesario ponerlo
            console.log(event.charCode);

            if (event.charCode === 13) {
                this.agregarEstudiante()
            }
        }
    },
    watch: {

    },
    data() {
        return {
            mensaje: 'Hola mundo, desde Vue.js',
            valor: 100,
            lista: estudiantes,
            nombre: undefined,
            apellido: undefined
        }
    }
})

app.mount('#myApp') // Monto en el DOM a "app", y le doy un id a mi aplicación