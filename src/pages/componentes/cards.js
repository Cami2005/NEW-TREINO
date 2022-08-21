export default function Card(props){
    
    function Idade() {
        if(props.idade !== undefined)
        alert ( 'Tenho ' + props.idade)

        else 
        alert ('Não tenho idade');
    }
    
    function LerTema() {
        if(props.tema !== undefined)
            return props.tema;
        
        else
            return 'tropical' 
    }
    
    
    
    
    
    
    return(
        <section>
            <div className={LerTema}>
                <img src={props.avatar} alt="avatar
                "/>
                Meu nome é {props.nome}
                <button onClick={Idade}>Minha Idade</button>
            </div>
        </section>
    )
}