console.log("elementos de Vue");
console.log(Vue);// Vue es un objeto

const estudiantes = [{ nombre: 'Edison', apellido: 'Cayambe' },
{ nombre: 'Daniel', apellido: 'Oviedo' },
{ nombre: 'Karla', apellido: 'Perez' },
{ nombre: 'Julio', apellido: 'Castillo' },
{ nombre: 'Andrea', apellido: 'Teran' },
]

console.log(estudiantes);
console.table(estudiantes)

// Lineas para configurar la app:
const app = Vue.createApp({
    // No es buena práctica poner cod html aqui:
    /*  template: `
     <h1>Hola mundo</h1>
     <p>Desde App.js</p>
     <h6>{{1+1}}</h6>
     <p>{{ [1,2,3,4,5,6,7,8] }}</p>
     <p>{{ false?'Verdadero':'Falso'}}</p>
     ` */
    //Options API
    methods: {
        cambiarMensaje() {
            console.log("Se está cambiando el mensaje.");
            console.log(this.mensaje);
            mensaje = "Valor cambiado"
        },
        cambiarNumero() {
            this.valor = this.valor + 1;
            console.log(this.valor);
        },
        agregarEstudiante() {
            console.log("Agregando estudiante.")
            // debo añadir un objeto estudiante
            const estu = { nombre: this.nombre, apellido: this.apellido }
            // Unshift: agrega al inicio de la lista
       /*      this.lista.unshift(estu) */
            // Push: agrega al final de la lista
            this.lista.push(estu)
        },
        presionandoTecla(event){ // event es un argumento por defecto, no es necesario ponerlo
            console.log("presionando...");
            console.log(event.charCode);
        },
        metodoApellido(event){
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
            nombre: null,
            apellido: null
        }
    }

})
app.mount('#myApp') // le doy un id a mi aplicación

// Definición de estructuras de la app