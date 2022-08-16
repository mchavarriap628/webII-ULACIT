import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./screens/Home/Home";
import Ayuda from "./screens/Ayuda/Ayuda";
import Informacion from "./screens/Informacion/Informacion";
import Login from "./screens/Login/Login";
import Perfil from "./screens/Perfil/Perfil";
import Restaurantes from "./screens/Admin/Restaurantes";
import Admin from "./screens/Admin/Admin";
import RegistrarEmpleado from "./screens/RegistrarEmpleado/RegistrarEmpleado";
import AgregarUsuario from "./screens/Admin/AgregarUsuario";
import Usuarios from "./screens/Admin/Usuarios";
import AgregarRestaurantes from "./screens/Admin/AgregarRestaurantes";
import ReportesAdmin from "./screens/Admin/Reportes";

const App = () => (
  <BrowserRouter>
    <Header />
    <main>
      <Route path='/' component={Home} exact />
      <Route path='/informacion' component={() => <Informacion />} exact />
      <Route path='/ayuda' component={() => <Ayuda />} exact />
      <Route path='/login' component={() => <Login />} exact />
      <Route path='/perfil' component={() => <Perfil />} exact />

      <Route path='/admin' component={() => <Admin />} exact />
      <Route path='/admin/usuarios' component={() => <Usuarios />} exact />
      <Route path='/admin/agregarUsuario' component={() => <AgregarUsuario />} exact />
      <Route path='/admin/restaurantes' component={() => <Restaurantes />} exact />
      <Route path='/admin/agregarRestaurantes' component={() => <AgregarRestaurantes />} exact />
      <Route path='/admin/reportes' component={() => <ReportesAdmin />} exact />


      <Route path='/admin/registrarEmpleado' component={() => <RegistrarEmpleado />} exact />

    </main>
    <Footer />
  </BrowserRouter>
);

export default App;
