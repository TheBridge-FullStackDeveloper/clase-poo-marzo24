// let yo = {
//   nombre: "yeison",
//   edad: 22,
//   correo: "y@gmail.com",
//   hablar: function () {
//     console.log(this.nombre);
//   },
// };

// // yo.hablar();
// yo.correo = "yeison@gmail.com";
// // console.log(yo);

// function decirNombre(obj) {
//   obj.hablar = function () {
//     console.log(this.nombre);
//   };
// }

// const Mateo = {
//   nombre: "Mateo",
//   edad: 22,
// };

// const juan = {
//   nombre: "Juan",
//   edad: 25,
// };

// decirNombre(juan);
// decirNombre(Mateo);

// // juan.hablar();
// // Mateo.hablar();

// const coche1 = {
//   modelo: "kuga",
//   marca: "Ford",
//   color: "gris",
// };

// const coche2 = {
//   modelo: "a3",
//   marca: "Audi",
//   color: "blanco",
// };

// function Coche(marca, modelo, antiguedad, color, tipo) {
//   this.marca = marca;
//   this.modelo = modelo;
//   this.antiguedad = antiguedad;
//   this.color = color;
//   this.tipo = tipo;
//   this.detalles = function () {
//     return (
//       "Tu coche es un " +
//       this.marca +
//       " " +
//       this.modelo +
//       " con " +
//       this.antiguedad +
//       " años, clase " +
//       this.tipo +
//       " y color " +
//       this.color
//     );
//   };
// }

// const miCoche = new Coche("Mercedes", "Volador", "2009", "Rojo", "Automatico");
// const otroCoche = new Coche(
//   "Audi",
//   "Muy nuevo",
//   2024,
//   "transparente",
//   "como un Europeo"
// );
// console.log(otroCoche.detalles());

// function Gatito(nombre, color, raza, tamaño, edad) {
//   this.nombre = nombre;
//   this.color = color;
//   this.raza = raza;
//   this.tamaño = tamaño;
//   this.edad = edad;
//   this.arañar = function () {
//     return "Scratch!!!"
//   }
//   this.saltar = function () {
//     return "Boingggggg!!!"
//   }
// }

// const trasto = new Gatito("Trasto","blanco","Noruego","chiquito",12)
// const v = new Gatito("V","blanco y negro","como un europeo","gigante",4)
// // console.log(trasto);
// // console.log(v);

// function Libro(titulo, autor, año){
//     this.titulo = titulo;
//     this.autor = autor;
//     this.año = año;
//     this.detalles = function () {
//     return this.titulo + " año publicación " + this.año
//   }
//   }

//   function Revista(titulo,autor, año,mes){
//     Libro.call(this, titulo, autor, año);
//     this.mes = mes
//   }

//   const mag1 = new Revista('Mag One','John Doe','2018','Enero')

class Coche {
    static info(edad){
        console.info(`Tienes ${edad} años ${ edad >= 18 ? "y puedes conducir": "y ... ¡Sorry! Sigue esperando para conducir."}`);
    }
    static test(){
        console.log("teeeest");
    }
  constructor(marca, modelo, antiguedad, color, tipo) {
    this.marca = marca;
    this.modelo = modelo;
    this.antiguedad = antiguedad;
    this.color = color;
    this.tipo = tipo;
  }
  detalles() {
    console.log(
      `Tu coche es un ${this.marca} ${this.modelo} con ${this.antiguedad} años, clase ${this.tipo} y color ${this.color}`
    );
  }
}
Coche.info(5)
Coche.test()
let miCoche2 = new Coche("Peugeot", "607", 2002, "rojo", "turismo");
Coche.test()

// miCoche2.detalles();

// class Gatito {
//   constructor(nombre, color, raza, tamaño, edad) {
//     this.nombre = nombre;
//     this.color = color;
//     this.raza = raza;
//     this.tamaño = tamaño;
//     this.edad = edad;
//   }
//   arañar() {
//     return "Scratch!!!"+this.nombre;
//   }
//   saltar() {
//     return "Boingggggg!!!";
//   }
// }

// const lya = new Gatito("Lya","negra","la que quieras","GIGANTE",3)
// // console.log(lya.arañar());

// class Furgon extends Coche {
//     constructor (marca, modelo, antiguedad, color, tipo,taraMinima, cargaUtil, volumenCarga) {
//       super(marca, modelo, antiguedad, color, tipo) 

//       this.taraMinima = taraMinima;
//       this.cargaUtil = cargaUtil;
//       this.volumenCarga = volumenCarga;
//       }
//   };
 
//   let miFurgon = new Furgon("Peugeot", "607", 2002, "rojo", "turismo",1200, 768, 4.5);
// console.log(miFurgon);