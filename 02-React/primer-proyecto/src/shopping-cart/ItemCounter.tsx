export const ItemCounter = () => {
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
                fontSize: '1.5rem'
            }}
            >
                Nintendo switch 2
            </span>
            <button>+</button>
            <span>0</span>
            <button>-</button>
        </section>
    )
}

