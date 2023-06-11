
<template>
    <div>
      <div>
        <Navbar />
      </div>
  
      <div class="divPrincipal">
        <div class="MenuClass">
          <MenuLateralAdmin/>
        </div>
        <div class="divFormTiendas" style="display:flex; flex-direction:column; gap: 50px; margin-left: 15%">
            <tiendasForm/>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Navbar from "../components/NavbarComponent.vue";
  import MenuLateralAdmin from "../components/MenuLateralAdminComponent.vue";
  import tiendasForm from "../components/tiendasFormComponent.vue";
  
  export default {
    name: "FormTiendaView",
    components: {
      Navbar,
      tiendasForm,
      MenuLateralAdmin,
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
   