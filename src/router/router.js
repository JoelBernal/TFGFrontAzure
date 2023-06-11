import Vue from "vue";
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView'
import LoginView  from '../views/LoginView'
import RegisterView  from '../views/RegisterView'
import ProductsView  from '../views/ProductsView'
import ProductosAdminView  from '../views/ProductsAdminView'
import UsuariosView  from '../views/UsuariosView'
import InfoUsuarioView  from '../views/InfoUsuarioView'
import FormLibroView  from '../views/FormLibroView'
import FormTiendaView  from '../views/FormTiendaView'
import TiendasView  from '../views/TiendasView'
import TiendasAdminView  from '../views/TiendasAdminView'
import PdpView  from '../views/PdpView'
import AboutUsView  from '../views/AboutUsView'
import PGraciasView  from '../views/PGraciasView'
import CheckoutView  from '../views/ChekcoutView.vue'
import EmpleadosView  from '../views/EmpleadosView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView
  },
  {
    path: "/home",
    name: "home",
    component: HomeView 
  },
  {
    path: "/login",
    name: "login",
    component: LoginView 
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView 
  },
  {
    path: "/products",
    name: "products",
    component: ProductsView 
  },
  {
    path: "/productosAdmin",
    name: "productsAdmin",
    component: ProductosAdminView 
  },
  {
    path: "/usuarios",
    name: "usuarios",
    component: UsuariosView 
  },
  {
    path: "/infousuario",
    name: "infousuario",
    component: InfoUsuarioView 
  },
  {
    path: "/formLibro",
    name: "FormLibro",
    component: FormLibroView 
  },
  {
    path: "/formTienda",
    name: "FormTienda",
    component: FormTiendaView 
  },
  {
    path: "/tiendas",
    name: "Tiendas",
    component: TiendasView 
  },
  {
    path: "/tiendasAdmin",
    name: "TiendasAdmin",
    component: TiendasAdminView 
  },
  {
    path: "/libro/:id",
    name: "PDP",
    component: PdpView 
  },
  {
    path: "/AboutUs",
    name: "Sobre Nosotros",
    component: AboutUsView 
  },
  {
    path: "/Gracias",
    name: "Gracias",
    component: PGraciasView 
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: CheckoutView 
  },
  {
    path: "/empleados",
    name: "Empleados",
    component: EmpleadosView 
  },
];

const router = new VueRouter({
  routes
});

export default router;