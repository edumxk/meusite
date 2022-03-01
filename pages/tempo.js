import  Link  from 'next/link';

function Tempo(props){

    const tempoDinamico = new Date();
    const stringTempoDinamico = tempoDinamico.toGMTString();
        
    return(
        <div>
            <div>{stringTempoDinamico}(Dinâmico)</div>
            <div>{props.stringTempoEstatico}(Estático)</div>
            
            <div>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </div>
        </div>
        
    )

}

export function getStaticProps(){
    const tempoEstatico = new Date();
    const stringTempoEstatico = tempoEstatico.toGMTString();
    return{
        props:{
            stringTempoEstatico
        },
        revalidate: 1
    }
}

export default Tempo