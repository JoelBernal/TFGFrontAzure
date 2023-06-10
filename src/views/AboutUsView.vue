<template>
  <div>
    <Navbar />
    <Aboutus />

    <Grafica />
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/NavbarComponent.vue";
import Footer from "../components/FooterComponent.vue";
import Grafica from "../components/GraficaComponent.vue";
import Aboutus from "../components/AboutusComponent.vue";

export default {
  name: "AboutUsView",
  components: {
    Navbar,
    Grafica,
    Footer,
    Aboutus,
  },
  data() {
    return {
      
    };
  },
};
</script>

<style>

</style>
