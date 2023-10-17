//9: EJEMPLO DE NULISH OPERATORS-----------------------------

//ES5

function add (x,y) {
    x = x === null ? 0 : x;
    y = y === null ? 0 : y;
    return x + y;
}

//ES6

function nullish (x, y) {
    x = x ?? 0;
    y = y ?? 0;
    return x + y;
}

//REACT

function bienvenida({saludo}) {
    return <div> {saludo.welcome ?? 'Unknow'}</div>
}

