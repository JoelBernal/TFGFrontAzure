<template>
  <div style="background-color: white;">
    <div class="divNavbar">
      <Navbar />
    </div>
    <div>
      <Login></Login>
    </div>
    <div>
    </div>
  </div>
</template>

<script>
import Login from "../components/LoginComponent.vue";
import Navbar from "../components/NavbarComponent.vue";


export default {
  name: "LoginView",
  components: {
    Login,
    Navbar,
  },
};
</script>

<style>
  .divNavbar{
    position: fixed;
  }
</style>
