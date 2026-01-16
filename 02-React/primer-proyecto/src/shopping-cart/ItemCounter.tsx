import { useState } from "react";

interface Props {
    name: string;
    quantity? : number;
}

export const  ItemCounter = ({ name, quantity = 1 }: Props) => {

    const [ count, setCount ] =  useState(quantity);

    const handleAdd = () => {
        setCount( count + 1 );
    }
    const handleRemove = () => {
        if ( count === 0 ) return;
        setCount( count - 1 );
    }

/* rafc + tab = Atajo para crear un componente funcional */
        return (
            <section style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                backgroundColor: 'red',
            }}
            >
                <span style={{
                    width: '200px',
                    fontWeight: 'bold',
                    fontSize: '1.5rem',
                    margin: '10px'
                }}
                >
                    { name }
                </span>

                <button onClick={handleAdd}>+</button>
                <span>{ count }</span>
                <button onClick={handleRemove}>-</button>
            </section>
        )
    }






