console.log("elementos de Vue");
console.log(Vue);// Vue es un objeto

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

})
app.mount('#myApp') // le doy un id a mi aplicación

// Definición de estructuras de la app