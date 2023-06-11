<template>
    <div>
      <div class="divNavbar">
        <Navbar />
      </div>
  
      <div style="margin-top: 30px; margin-bottom: 30px;">
        <FormuPago />
      </div>
      <Footer />
    </div>
    
  </template>
  
  <script>
  import Navbar from "../components/NavbarComponent.vue";
  import FormuPago from "../components/FormuPagoComponent.vue";
  import Footer from "../components/FooterComponent.vue";
  
  export default {
    name: "CheckoutView",
    components: {
        Navbar,
        FormuPago,
        Footer,
    },
  };
  </script>
  
  <style>
    .divNavbar{
      position: fixed;
    }
  </style>
  