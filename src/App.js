import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Menu from './pages/menu';
import Eventos from './pages/eventos';
import Componentes from './pages/componentes';

export default function App(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path= '/' element={<Menu/>}/>
            <Route path= '/eventos' element={<Eventos/>}/>
            <Route path= '/componentes' element={<Componentes/>}/>

        </Routes>
    </BrowserRouter>
    )
}