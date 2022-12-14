import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./screens/Home/Home";
import Ayuda from "./screens/Ayuda/Ayuda";
import Informacion from "./screens/Informacion/Informacion";
import Login from "./screens/Login/Login";

import Admin from "./screens/Admin/Admin";
import Restaurantes from "./screens/Admin/Restaurantes";
import AgregarRestaurantes from "./screens/Admin/AgregarRestaurantes";
import Restaurante from "./screens/Admin/Restaurante";
import Usuarios from "./screens/Admin/Usuarios";
import AgregarUsuario from "./screens/Admin/AgregarUsuario";
import Usuario from "./screens/Admin/Usuario";
import ReportesAdmin from "./screens/Admin/Reportes";
import Bitacora from "./screens/Admin/Bitacora";

import Perfil from "./screens/Perfil/Perfil";
import PasswordReset from "./screens/Perfil/PasswordReset";

import AdminTareas from "./screens/Admin/Tareas";
import GerenteTareas from "./screens/Gerente/Tareas";
import SupervisorTareas from "./screens/Supervisor/Tareas";
import EmpleadoTareas from "./screens/Empleado/Tareas";

import AgregarEmpleado from "./screens/Gerente/AgregarEmpleado";
import EmpleadosRestaurante from "./screens/Gerente/EmpleadosRestaurante";
import ModificarUsuario from "./screens/Gerente/ModificarUsuario";

import Cliente from "./screens/Empleado/Cliente";
import Facturacion from "./screens/Empleado/Facturacion";

import ReportesSupervisor from "./screens/Supervisor/Reportes";
import Proveedores from "./screens/Supervisor/Proveedores";
import Productos from "./screens/Supervisor/Productos";

const App = () => (
  <BrowserRouter>
    <Header />
    <main>
      <Route path='/' component={Home} exact />
      <Route path='/informacion' component={() => <Informacion />} exact />
      <Route path='/ayuda' component={() => <Ayuda />} exact />
      <Route path='/login' component={() => <Login />} exact />

      <Route path='/perfil' component={() => <Perfil />} exact />
      <Route path='/perfil/password/:id' component={() => <PasswordReset />} exact />

      <Route path='/admin/tareas' component={() => <AdminTareas />} exact />
      <Route path='/gerente/tareas' component={() => <GerenteTareas />} exact />
      <Route path='/supervisor/tareas' component={() => <SupervisorTareas />} exact />
      <Route path='/empleado/tareas' component={() => <EmpleadoTareas />} exact />


      <Route path='/admin' component={() => <Admin />} exact />
      <Route path='/admin/usuarios' component={() => <Usuarios />} exact />
      <Route path='/admin/agregarUsuario' component={() => <AgregarUsuario />} exact />
      <Route path='/admin/usuario/:id' component={() => <Usuario />} exact />
      <Route path='/admin/restaurantes' component={() => <Restaurantes />} exact />
      <Route path='/admin/agregarRestaurante' component={() => <AgregarRestaurantes />} exact />
      <Route path='/admin/restaurante/:id' component={() => <Restaurante />} exact />
      <Route path='/admin/reportes' component={() => <ReportesAdmin />} exact />
      <Route path='/admin/reportes/bitacora' component={() => <Bitacora />} exact />

      <Route path='/gerente/contrato/:id' component={() => <AgregarEmpleado />} exact />
      <Route path='/gerente/empleados/:id' component={() => <EmpleadosRestaurante />} exact />
      <Route path='/gerente/modificar/:id' component={() => <ModificarUsuario />} exact />

      <Route path='/empleado/cliente/' component={() => <Cliente />} exact />
      <Route path='/empleado/facturacion/:id' component={() => <Facturacion />} exact />

      <Route path='/supervisor/proveedores' component={() => < Proveedores />} exact />
      <Route path='/supervisor/productos' component={() => < Productos />} exact />
      <Route path='/supervisor/reportes' component={() => < ReportesSupervisor />} exact />

    </main>
    <Footer />
  </BrowserRouter>
);

export default App;
