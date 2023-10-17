
//8: EJEMPLO DE ARRAY METHODS-----------------------------

//Aplicaremos el ejemplo con React:

function Filter({ streets }) {
    return (
      <>
        {streets.length > 0 ? (
          <ul>
            {streets
              .filter((street) => street.number > 200)
              .map((street, index) => (
                <li key={index}> {street.name}</li>
              ))}
          </ul>
        ) : (
          <p>Las calles no cumplen con el criterio de filtrado.</p>
        )}
      </>
    );
  }