import {useState} from 'react';
function Home(){
    return (<div>
        <h1>Contador React</h1>
        <Contador />

        </div>)
}

function Contador(){
    const [contador, setContador] = useState(1);
    
    function atualizaContador(){
        setContador(contador + 1)
    }
    return(
        <div>
            <div>N. {contador}</div>
            <button onClick={atualizaContador}>Adicionar</button>
        </div>
    )
}
export default Home