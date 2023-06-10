<template>
  <div style="height: 100vh;">
    <div>
      <Navbar />
    </div>

    <div style="display: flex; flex-direction: column;">
      <div class="MenuClass">
        <MenuLateral></MenuLateral>
      </div>
      <div style="display:flex; flex-direction:column; gap: 50px; margin-left: 15%; margin-bottom: 4%;">
        <div style=" gap: 30px; margin-top: 35px; margin-bottom: 30px; ">
          <InfoUsuario></InfoUsuario>
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
    <div>
      
    </div>
  </div>
</template>

<script>
import Navbar from "../components/NavbarComponent.vue";
import MenuLateral from "../components/MenuLateralComponent.vue";
import InfoUsuario from "../components/InfoUsuarioComponent.vue";
import Footer from "../components/FooterComponent.vue";


export default {
  name: "InfoUsuarioView",
  components: {
    Navbar,
    InfoUsuario,
    MenuLateral,
    Footer,
    
  },
  props: {
    source: String,
  },
};
</script>
 
<style scoped>
.MenuClass {
  height: auto;
  max-height: 100%;
}

div[data-v-2c902354] {
    display: block !important;
}

div[data-v-b680aa46] {
    display: flex !important;
    flex-direction: column !important;
}
</style>
 