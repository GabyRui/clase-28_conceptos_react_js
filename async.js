//11: EJEMPLO DE async-----------------------

//ES5 (promises)

const promesa = new Promesa((ok,cancelled) => {
    return ok('');
    cancelled ('');
})

//ES6 (Aplicando async/await)

const readData = async () => {
    const response = await fetch ('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    return data;
}

