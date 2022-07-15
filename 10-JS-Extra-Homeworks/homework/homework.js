// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  a=[]
  for (i in objeto){
    a.push([i, objeto[i]])
  }
  return a
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  a={}

  for (i in string){
    if (string[i] in a===false) 
  {b=0
   for (j in string){
    if (string[j]===string[i]){b+=1}
    else continue
   a[string[i]]=b
}}}
    return a
  
  
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
mayus=''
minus=''
for (i in s){
  if (s[i].toUpperCase()===s[i]){mayus+=s[i]}
  else minus += s[i]
}
return mayus + minus
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  a=str.split(' ')
  b=''
  for (i in a) {
    for (j in a[i])
    {b+=a[i][j]}
    b+=' '

    
  }
  return b.split('').reverse().join('').split(' ').reverse().join(' ').substring(0, b.length-1)
} 



function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  a=0
 numstr=numero.toString()
  for (i in numstr){
    if (i<=numstr.length/2){
      if (numstr[i]===numstr[numstr.length-1-i]){continue}
      else a+=1
    }}
  if(a===0){return 'Es capicua'}
  else return 'No es capicua'

}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  a=''
  for (i in cadena){
    if (cadena[i]==='a'||cadena[i]==='b'||cadena[i]==='c'){
      continue
    }
    else a+=cadena[i]
  }
  return a
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  return arr.sort(function (a,b){return a.length-b.length})
  
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí 
  a=[] 
  for (i in arreglo1){for (j in arreglo2){
    if(arreglo1[i]===arreglo2[j]){a.push(arreglo1[i])}
    else continue}
  }
 
  return a
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

