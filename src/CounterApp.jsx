import { useState } from 'react';

export const CounterApp = ({ value }) => {

    const [ counter, setCounter ] = useState( value );

    // Forma #1
    const handleAdd = () => {
        setCounter( (c) => c + 1 ); 
    }

    // Forma #2
    const handleSustract = () => setCounter( counter - 1 );
    
    const handleReset = () => setCounter( value );

    return (
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>

            <button onClick={ handleSustract }> -1 </button>
            <button onClick={ handleReset }> Reset </button>
            <button onClick={ handleAdd }> +1 </button>
        </>
    );
}