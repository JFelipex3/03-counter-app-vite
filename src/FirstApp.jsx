
// Ponerlo fuera no se renderiza nuevamente y está encapsulado en el componente
const newMessage = {
    message: 'Hola Mundo',
    title: 'Soy un título'
};

// Función que retona saludo y no depende de funcionamiento interno de FirstApp
const getSaludo = () => {
    return `Hola, Jhonnatan`;
}

// Las props son los parametros que recibe el componente desde el padre, comunmente se destructuran al definirla en la función.
export const FirstApp = ( { title, subTitle } ) => {

    // Si una función depende de valores de dentro de esta función se debe declarar acá.

    return (
        // Definición de un fragmento sin necesidad de importar
        <>
            <code>{ JSON.stringify( newMessage ) }</code>
            <h1>{ title }</h1>
            {/* No puede ser una función async, ni una promesa */}
            {/* <h1> { getSaludo() } </h1> */}
            <p>{ subTitle }</p>
        </>
    );
}