//10: EJEMPLO DE optinalChaining-----------------------

//ES5

const register = user && user.number && user.number.code.place;

//ES6

const registerChaining = user?.number?.code?.place;

//REACT

//{user: 'new', subcode: {code: 5699}} 

function Location ({usuario}) {
    return(
        <div>
            <h3> {usuario.code} </h3>
            <div> {usuario.subcode?.short && 'No subcode provides'}</div>
        </div>
    );
}