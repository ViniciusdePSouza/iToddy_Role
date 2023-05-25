import {Route, Routes} from 'react-router-dom'
import { SignIn } from './Pages/SignIn'
import { SignUp } from './Pages/SignIn/SignUp'

export function Router() {
    return(
        <Routes>
            <Route path='/iToddy_Role' element={<SignIn/>}/>
            <Route path='/iToddy_Role/signup' element={<SignUp/>}/>
        </Routes>
    )
}