export default function Ejemplo(){
    let nombre = 'Catalina'
    return <h1>Hola, {nombre}</h1>
}

export function OtroEjemplo(){
    return <div>
        <ul>
            <li>Elemento 1</li>
            <li>Elemento 2</li>
        </ul>
        <OtroElemento/>
    </div>
}

function OtroElemento(){
    return (<div>
        <h2>Este es otro elemento de ejemplo</h2>
    </div>
    )
}

