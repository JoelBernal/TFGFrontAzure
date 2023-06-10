<template>
  <div>
    <div>
      <Navbar />
    </div>
    <div style="display: flex;">
      <div class="MenuClass">
        <MenuLateral></MenuLateral>
      </div>
      <div style="display:flex; flex-direction:column; gap: 50px; margin-left: 15%">
        <div style="display: flex; flex-direction: column; gap: 30px; margin-top: 35px ">
          <div>
            <Pdp/>
          </div>
        </div>
      </div>
    </div>
    <div>
      <Footer/>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/NavbarComponent.vue";
import MenuLateral from "../components/MenuLateralComponent.vue";
import Pdp from "../components/PdpComponent.vue";
import Footer from "../components/FooterComponent.vue";


export default {
  name: "PdpView",
  components: {
    Navbar,
    Pdp,
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
</style>
 