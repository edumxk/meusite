import {useState} from 'react';
import  Link  from 'next/link';

function Home(){
    return (
    <div>
        <h1>Formulário de Evolução</h1>
        <h1>Enfermeira Julia Cavalcante</h1>
       
            <div>
                <Link href="/novo">
                    <a>Nova Evolução</a>
                </Link>
            </div>
            <div>
                <Link href="/tempo">
                    <a>Histórico</a>
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