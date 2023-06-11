
<template>
    <div>
      <div>
        <Navbar />
      </div>
  
      <div class="divPrincipal">
        <div class="MenuClass">
          <MenuLateral></MenuLateral>
        </div>
        <div class="divFormTiendas" style="display:flex; flex-direction:column; gap: 50px; margin-left: 15%">
            <tiendasForm/>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Navbar from "../components/NavbarComponent.vue";
  import MenuLateral from "../components/MenuLateralComponent.vue";
  import tiendasForm from "../components/tiendasFormComponent.vue";
  
  export default {
    name: "FormTiendaView",
    components: {
      Navbar,
      tiendasForm,
      MenuLateral,
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

  .divPrincipal {
    display: flex;
  }
  @media screen and (max-width: 1264px) {
  .divFormTiendas {
    display: flex;
    align-items: center;
    justify-content: center;

  }
}

@media screen and (max-width: 560px) {
  .divFormTiendas {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 0% !important
  }
}

@media screen and (max-width: 440px) {
  .divPrincipal {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
  </style>
   