<template>
  <div>
    <div>
      <Navbar />
    </div>
    <div>
      <div class="MenuClass">
        <MenuLateral></MenuLateral>
      </div>
      <div
        class="div1"
      >
        <div
          style="
            display: flex;
            flex-direction: column;
            gap: 30px;
          "
        >
          <div>
            <h1 id="tituloProductos">PRODUCTOS</h1>
            <Productos />
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
import MenuLateral from "../components/MenuLateralComponent.vue";
import Productos from "../components/ProductosComponent.vue";
import Footer from "../components/FooterComponent.vue";

export default {
  name: "ProductsView",
  components: {
    Navbar,
    Productos,
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
#tituloProductos {
  text-align: center;
  color: #333;
  font-size: 48px;
  font-family: "Arial", sans-serif;
  text-shadow: 2px 2px 4px rgba(1, 9, 10, 0.7);
  padding: 10px;
}

.div1 {
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-left: 15%;
}

@media (max-width: 1650px) {
  .menuProductos {
    margin-left: 40px;
  }
}

@media (max-width: 1034px) {
  .div1 {
    display: flex;
    flex-direction: column;
    gap: 50px;
    margin-left: 0% !important;
  }
}

/* @media (max-width: 600px) {
  .div1 {
    display: flex;
    flex-direction: column;
    gap: 50px;
  }
} */
</style>
