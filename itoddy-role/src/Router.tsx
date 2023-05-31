import {Route, Routes} from 'react-router-dom'
import { SignIn } from './Pages/SignIn'
import { SignUp } from './Pages/SignUp'
import { Login } from './Pages/Login'
import { ProducerHome } from './Pages/ProducerHome'
import { Details } from './Pages/Details'
import { EditEvent } from './Pages/EditEvent'

export function Router() {
    return(
        <Routes>
            <Route path='/iToddy_Role' element={<SignIn/>}/>
            <Route path='/iToddy_Role/signup' element={<SignUp/>}/>
            <Route path='/iToddy_Role/login' element={<Login/>}/>
            <Route path='/iToddy_Role/home-producer' element={<ProducerHome/>}/>
            <Route path='/iToddy_Role/details/:id' element={<Details/>}/>
            <Route path='/iToddy_Role/details/edit/:id' element={<EditEvent/>}/>
        </Routes>
    )
}