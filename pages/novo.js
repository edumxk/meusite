import  Link  from 'next/link';
//import '../src/css/reset.css'
//import '../src/css/contato.css'
//import '../src/css/sidebar.css'

function Novo(){
    return (
       <section>
           <h1>Nova Evolução</h1>
            <form action="#" method="post">
                <DadosPaciente/>
            </form>
       </section>
    )
}

function DadosPaciente(){
    return(
            <div className='dadosPaciente'>
               
                    <label htmlFor='nome'>Nome</label>
                    <input type="text" name="nome" id="nomePaciente"/>
                
                    <label htmlFor='sexo'>Sexo</label>
                    <select name="sexo" id="sexoPaciente">
                        <option>Masculino</option>
                        <option>Feminino</option>
                    </select>

                    <label htmlFor='idade'>Idade</label>
                    <input type="number" name="idade" id="idadePaciente" defaultValue={30}/>

                    <label htmlFor='conciencia'>Conciencia</label>
                    <select name="conciencia" id="concienciaPaciente">
                        <option>Conciente</option>
                        <option>Feminino</option>
                    </select>  
                        
                    <label htmlFor='glasgow'>Glasgow</label>
                    <input type="number" name="glasgow" id="glasgow" min='1' max='15' defaultValue={7}/>
                    
                    <label htmlFor='rass'>RASS</label>
                    <input type="number" name="rass" id="rass" min='-5' max='5' defaultValue={0}/>
                    
                    <label htmlFor='respiracao'>Respiração</label>

                    <select name="respiracao" id="respiracao">
                        <option>Espontanea</option>
                        <option>TOT</option>
                        <option>TQT</option>
                    </select> 
            </div>
    );
}

export default Novo