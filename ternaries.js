//7: EJEMPLO DE TERNARIES-----------------------------

//ES5

let aviso;
if (codigo.registro){
    aviso = 'registrado';
} else {
    aviso = 'noRegistrado';
}

//ES6

const alertMensagge = codigo.registro ? 'registrado' : 'noRegistrado';

//REACT

function PersonList({ persons }) {
    return (
        <>
        {persons.length > 0 ? (
            <ul>
                {persons.map((user) => (
                    <li> {user.name} </li>
                )) }
            </ul>
        ) : (
            <p>No hay personas registradas</p>      
        )}
     </>
    );
}
