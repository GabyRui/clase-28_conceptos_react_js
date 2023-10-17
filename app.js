//1: EJEMPLO DE TEMPLATE LITERALS----------------------

//JS
const anime = "hunterxhunter";
const genero = "shonen";

const oracion = 
`Me gusta el anime ${anime}, el cual es de género ${genero}.`;


//ES5
console.log(anime + '' + genero + '');

//ES6
console.log(`Me gusta el anime ${anime}, el cual es de género ${genero}`);

//REACT

function caja({className, ...props}) {
    return <div className= {`caja ${className}`} {...props} /> 
}

//2: EJEMPLO DE SHORT HAND PROPERTY-------------------

// JS

const x = 'Nuevo';
const y = 1000;
const z = {z:[2, true]};

// ES5

console.log({x: x, y: y, z: z});

//ES6

console.log({x, y, z});

//REACT

function Videogame({name, level}) {
    return <div> {name} . {level}</div>
}

//3: EJEMPLO DE ARROW FUNCTIONS-------------------

//ES5

function readName(name) {
    return name;
}

function readphone(phone) {
    return phone;
}

//ES6

const readNameWithArrow = (name) => name;
const readPhoneWithArrow = (phone) => phone;


//REACT

function NameList ({persons}) {
    return (
        <div>
            {persons.map((person) => (
                <div> {person.phone} </div>
            ) )}
        </div>
    );
}

//4: EJEMPLO DE DESESTRUCTURING------------------

//ES5

function Operation(obj) {

    const a = obj.a;
    const b = obj.ab;
    const c = obj.c === undefined ? 20 : obj.c;

    return Math.floor((a + b + c) / 4);
}

//ES6

function operationTwo(obj) {
    const {a, ab: b, c = 20 } = obj;
    return Math.floor((a + b + c) / 4);

};

//REACT

function infoUser ({ password = 'password is not valid', ...props}) {
    return <span> {password} </span>
}

///5: EJEMPLO DE PARAMETERS DEFAULT------------------

//(revisar otra página - module_(parametersDefault))

//6: EJEMPLO DE MODULES-----------------------------

//ES5

function add(c, d) {
    return c + d;
}

//ES6

export const suma = (c, d) => c + d;
import { suma } from './module_(parametersDefault)';

//REACT

export const Password =({password}) => {
    return <div> {password.name}</div>
}

import { Password } from './module_(parametersDefault)'

//7: EJEMPLO DE TERNARIES-----------------------------

//(revisar otra página - ternaries)

//8: EJEMPLO DE ARRAY METHODS-----------------------------

//(revisar otra página - ArrayMethods)

//9: EJEMPLO DE Nulish Operator-------------------------

//(revisar otra página - nulishOperator)

//10: EJEMPLO DE optionalChaining-----------------------

//(revisar otra página - optionalChaining)

//11: EJEMPLO DE async-----------------------
