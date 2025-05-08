// Ponerlo fuera no se renderiza nuevamente y está encapsulado en el componente
const newMessage = {
    message: 'Hola Mundo',
    title: 'Soy un título'
};

// Función que retona saludo y no depende de funcionamiento interno de FirstApp
const getSaludo = () => {
    return `Hola, Jhonnatan`;
}

export const FirstApp = () => {

    // Si una función depende de valores de dentro de esta función se debe declarar acá.

    return (
        // Definición de un fragmento sin necesidad de importar
        <>
            <code>{ JSON.stringify( newMessage ) }</code>
            {/* No puede ser una función async, ni una promesa */}
            <h1> { getSaludo() } </h1>
            <p>Soy un subtitulo</p>
        </>
    );
}