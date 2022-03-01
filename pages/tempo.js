import  Link  from 'next/link';

function Tempo(){
    const tempoDinamico = new Date();
    const stringTempoDinamico = tempoDinamico.toGMTString();
    return(
        <div>
            {stringTempoDinamico}(dinamico)
            <div>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </div>
        </div>
        
    )
}
export default Tempo