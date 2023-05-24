import {Route, Routes} from 'react-router-dom'
import { SignIn } from './Pages/SignIn'

export function Router() {
    return(
        <Routes>
            <Route path='/' element={<SignIn/>}/>
        </Routes>
    )
}