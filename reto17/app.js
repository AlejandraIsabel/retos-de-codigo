/* solucion reto 17: principalmente saber como
se utiliza un objeto*/

function getAllKeys(obj) {
  return Object.keys(obj)
}

//dato del ejemplo
var key=getAllKeys({name: 'Sam', age: 25, hasPets: true})
console.log(key);


 // Otra forma de hacerlo, se crea una variable que contiene el arreglo  (los valores del key).
 // se crea la condicion de que si la propiedad no es un array, devuelve undefined 
 // se crea otra condicion de que si el indice dentro de key es mayor a los que contiene, devuelve undefined. Ademas esta condicion comprueba que si el array esta vacio
 // por ultimo se crea una condicion de que si el array no existe, devuelve undefined ( cuando llamo a algo que no existe, la consola devuelve "undefined")
 // luego se filtrar la informacion, se comienza a trabjar buscando el index dentro del array y esto devuelve el elemento del index
 
 /*function getElementOfArrayProperty(obj, key, index) {
     var x = obj.key;
     
   if (typeof x != "object" ){
       return undefined;
   }
   if (key[index] === undefined){
       return undefined
   }
   if (obj.key === undefined){
       return undefined
   }
   var y = x[index];
   return y
   
 }
 */