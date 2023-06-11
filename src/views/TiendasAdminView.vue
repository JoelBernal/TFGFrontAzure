<template>
  <div>
    <div>
      <Navbar />
    </div>
    <div style="display: flex">
      <div class="MenuClass">
        <MenuLateralAdmin />
      </div>
      <div class="div1">
        <div style="display: flex; flex-direction: column; gap: 30px">
          <div>
            <h1 id="tituloTiendas">TIENDAS</h1>
            <TiendasAdmin />
          </div>
        </div>
      </div>
    </div>
    <div>
      <Footer />
    </div>
  </div>
</template>

<script>
import Navbar from "../components/NavbarComponent.vue";
import MenuLateralAdmin from "../components/MenuLateralAdminComponent.vue";
import Footer from "../components/FooterComponent.vue";
import TiendasAdmin from "../components/TiendasAdminComponent.vue";

export default {
  name: "TiendasAdminView",
  components: {
    Navbar,
    MenuLateralAdmin,
    Footer,
    TiendasAdmin,
  },
  props: {
    source: String,
  },
};
</script>

<style scoped>

#tituloTiendas {
  text-align: center;
  color: #333;
  font-size: 48px;
  font-family: "Arial", sans-serif;
  text-shadow: 2px 2px 4px rgba(1, 9, 10, 0.7);
  padding: 10px;
}
.MenuClass {
  height: auto;
  max-height: 100%;
}

.div1 {
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-left: 15%;
}

@media (max-width: 1264px) {
  .div1 {
    display: flex;
    flex-direction: column;
    gap: 50px;
    margin-left: 0% !important;
  }
}
</style>
