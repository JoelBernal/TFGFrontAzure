
<template>
  <div>
    <div>
      <Navbar />
    </div>

    <div class="divPrincipal">
      <div class="MenuClass">
        <MenuLateralAdmin/>
      </div>
      <div class="divFormLibro" style="display:flex; flex-direction:column; gap: 50px; margin-left: 15%">
          <librosForm/>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/NavbarComponent.vue";
import MenuLateralAdmin from "../components/MenuLateralAdminComponent.vue";
import librosForm from "../components/librosFormComponent.vue";

export default {
  name: "FormLibroView",
  components: {
    Navbar,
    librosForm,
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

.menuPrincipalForm {
  display: flex;
}

@media screen and (max-width: 1264px) {
  .divFormLibro {
    margin-left: 0% !important
  }

  .divPrincipal {
  display: flex;
  justify-content: center;
  align-items: center;
}
.MenuClass {
  height: 94vh;
  max-height: 100%;
}
}
@media screen and (max-width: 736px) {
.MenuClass {
  height: 112vh;
  max-height: 100%;
}
}

</style>
 