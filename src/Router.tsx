import { Route, Routes } from "react-router-dom";
import { SignIn } from "./Pages/SignIn";
import { SignUp } from "./Pages/SignUp";
import { Login } from "./Pages/Login";
import { ProducerHome } from "./Pages/ProducerHome";
import { Details } from "./Pages/Details";
import { EditEvent } from "./Pages/EditEvent";
import { NewEvent } from "./Pages/NewEvent";
import { Home } from "./Pages/Home";
import { DetailsUser } from "./Pages/DetailsUser";
import { Search } from "./Pages/Search";

export function Router() {
  return (
    <Routes>
      <Route path="/iToddy_Role" element={<Home />} />
      <Route path="/iToddy_Role/signIn" element={<SignIn />} />
      <Route path="/iToddy_Role/signup" element={<SignUp />} />
      <Route path="/iToddy_Role/login" element={<Login />} />
      <Route path="/iToddy_Role/home-producer" element={<ProducerHome />} />
      <Route path="/iToddy_Role/details/:id" element={<Details />} />
      <Route path="/iToddy_Role/detailsuser/:id" element={<DetailsUser />} />
      <Route path="/iToddy_Role/details/edit/:id" element={<EditEvent />} />
      <Route path="/iToddy_Role/newevent" element={<NewEvent />} />
      <Route path="/iToddy_Role/search" element={<Search />} />
    </Routes>
  );
}
