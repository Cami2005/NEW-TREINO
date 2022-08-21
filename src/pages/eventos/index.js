import './index.scss'


function Clique() {
    alert('Usuário clicou')
}

function Mouse(){
    alert('Úsuario mexeu o mouse')
}

function Alterou() {
    alert('Úsuario alterou')
}

function Digitou (event){
    alert ('Digitou' + event.key)
    console.log(Digitou);
}

function Selecionou () {
    alert ('Úsuario selecionou opcão')

}



export default function Index(){
    return(
        <main className='Fundo-1'>
            <div className='fundo-2'>
            <h1 onMouseMove={Mouse}>Olá, seja bem-vindo!</h1>

            <div>
            <input type='text' placeholder="Digite aqui" onChange={Alterou} onKeyDown={Digitou}/>
            </div>

                <select>
                <option selected value="Selecione"> Selecione</option>
                    <option> Sim </option>
                    <option> Não </option>
                </select>

                <div>
                    <input type='radio' onChange={Selecionou}/> Opção 1
                    <input type='radio'onChange={Selecionou}/> Opção 2
                </div>

                <div>
                    <input type='checkbox' onChange={Selecionou}/> Opção 1
                    <input type='checkbox' onChange={Selecionou}/> Opção 2
                </div>

                <button onClick={Clique}>Okay</button>
        </div>
        </main>
    )
}