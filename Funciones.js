//
let función = (a,b) => (a * b);
console.log(función(5, 6));

// segundo ejercicio

let segundo = ( a ,c ) => (a - c);
console.log(segundo( 20, 15));

//Variables locales dentro de una función

let local = () => {
    let variables = 20;
    return variables;
}
console.log(local());

// funciones 3 

const elmejor = () => {
    let gozar = 50;
    let virir = 47;
    return gozar * virir;
}
elmejor();

// funcion 5

const mejorf = ( m , r) => m + r;
console.log(mejorf(4, 60)); 

