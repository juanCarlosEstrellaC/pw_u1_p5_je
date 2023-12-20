const estudiantes = [
    { nombre: 'Edison', apellido: 'Cayambe', genero: 'Masculino', pais: 'Ecuador', hobby: 'Programar' },
    { nombre: 'Daniel', apellido: 'Oviedo', genero: 'Masculino', pais: 'Ecuador', hobby: 'Programar'},
    { nombre: 'Karla', apellido: 'Perez', genero: 'Femenino', pais: 'Colombia', hobby: 'Cocinar' },
    { nombre: 'Julio', apellido: 'Castillo', genero: 'Masculino', pais: 'Ecuador', hobby: 'Bailar' },
]
console.table(estudiantes)

const app = Vue.createApp({
    methods: {
        agregarEstudiante() {
            console.log("Agregando estudiante.")
            const estu = { nombre: this.nombre, apellido: this.apellido, hobby: this.hobby, genero: this.genero, pais: this.pais }    
            this.lista.push(estu)    
            console.log(this.lista);   
            console.table(this.lista)
        },
    },
    data() {
        return {
            lista: estudiantes,
            nombre: '',
            apellido: '',
            hobby: '',
            genero: '',
            pais: '',
        }
    }
})

app.mount('#myApplicacion') 