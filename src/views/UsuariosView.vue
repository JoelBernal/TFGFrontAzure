<template>
  <div>
    <div>
      <Navbar />
    </div>


      <div style="display:flex; flex-direction:column; gap: 50px;">
        <div style="display: flex; gap: 30px; margin-top: 35px; justify-content: center; align-items: center; flex-direction: column; ">    
          <h1 id="tituloClientes">CLIENTES DE LA WEB</h1>
          <Clientes/>
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>

</template>

<script>
import Navbar from "../components/NavbarComponent.vue";
import Clientes from "../components/ClientesComponent.vue";
import Footer from "../components/FooterComponent.vue";
import { mapState } from "vuex";

export default {
  name: "UsuariosView",
  components: {
    Navbar,
    Clientes,
    Footer,

  },
  props: {
    source: String,
  },
  computed : {
    ...mapState(["usuario"])
  },
  mounted(){
    this.checkAdmin(this.usuario);

  },
  methods : {
    checkAdmin(usuario){
      if (!usuario || usuario.rol !== "admin") {
        this.$router.replace("/home")
      }
    }
  }
};
</script>
 
<style>
.MenuClass {
  height: auto;
  max-height: 100%;
}

#tituloClientes {
  text-align: center;
  color: #333;
  font-size: 48px;
  font-family: "Arial", sans-serif;
  text-shadow: 2px 2px 4px rgba(1, 9, 10, 0.7);
  padding: 10px;
}
</style>
 