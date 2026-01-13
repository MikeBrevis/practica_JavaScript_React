interface Props {
    name: string;
    quantity? : number;
}

/* rafc + tab = Atajo para crear un componente funcional */
export const ItemCounter = ({ name, quantity }: Props) => {
        return (
            <section style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
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

                <button>+</button>
                <span>{ quantity }</span>
                <button>-</button>
            </section>
        )
    }




