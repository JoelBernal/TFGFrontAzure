<template>
  <div  style="background-color: white;">
    <div class="divNavbar">
      <Navbar />
    </div>

    <div>
      <Register></Register>
    </div>
  </div>
</template>

<script>
import Register from "../components/RegisterComponent.vue";
import Navbar from "../components/NavbarComponent.vue";


export default {
  name: "RegisterView",
  components: {
      Register,
      Navbar
  },
};
</script>


<style>
  .divNavbar{
    position: fixed;
    z-index: 2;
  }
</style>