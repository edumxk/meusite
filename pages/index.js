import {useState} from 'react';
import  Link  from 'next/link';

function Home(){
    return (
    <div>
        <h1>Home</h1>
        <h1>Contador React</h1>
        <Contador/>
            <div>
                <Link href="/contato">
                    <a>Contato</a>
                </Link>
            </div>
            <div>
                <Link href="/tempo">
                    <a>Tempo</a>
                </Link>
            </div>
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