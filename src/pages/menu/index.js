import { Link } from "react-router-dom";

export default function Index() {
    return(
        <main>
            <h1>Bem Vindo</h1>

            <ul>
            <ul>
                <li> <Link to='/Eventos'> Eventos </Link></li>
                <li> <Link to='/Componentes'> Componentes </Link></li>


            </ul>
            </ul>
        </main>
    )
}
