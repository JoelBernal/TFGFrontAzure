<template>
  <v-app class="menuDiv">
    <div
      :class="{ hidden: windowWidth < 1265 }"
      ref="menu"
      style="position: fixed; height: 100vh"
    >
      <v-list dense nav style="height: 100%; width: 250px; padding: 20px 10px">
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.href"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="mandangon">
              {{ item.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="redirectToFormLibro" link>
          <v-list-item-icon>
            <v-icon>mdi-plus</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="añadirLibro">
              Añadir Libro (ADMIN)
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="redirectToFormTienda" link>
          <v-list-item-icon>
            <v-icon>mdi-plus</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="añadirTienda">
              Añadir Tienda (ADMIN)
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </div>
    <v-btn class="botonLateral" icon @click="toggleMenu"
      ><i class="bi bi-three-dots"></i
    ></v-btn>
  </v-app>
</template>

<script>
export default {
  name: "MenuLateraAdminComponent",
  data() {
    return {
      items: [
        { title: "Libros", icon: "mdi-book", href: "/productosAdmin" },
        { title: "Tiendas", icon: "mdi-view-dashboard", href: "/tiendasAdmin" },
        { title: "Ajustes", icon: "mdi-cog", href: "/InfoUsuario" },
      ],
    };
  },
  methods: {
    toggleMenu() {
      this.$refs.menu.classList.toggle("hidden");
    },
    redirectToFormLibro() {
      this.$router.push("/formLibro");
    },
    redirectToFormTienda() {
      this.$router.push("/formTienda");
    },
  },
};
</script>

<style scoped>
.menuDiv {
  position: relative;
  z-index: 1;
}

.menu-button {
  position: absolute;
  top: 20px;
  right: 20px;
}
.botonLateral {
  display: none;
}

.hidden {
  display: none;
}

@media (max-width: 1264px) {
  .botonLateral {
    display: block;
    position: fixed;
    bottom: 20px;
    left: 20px;
    background-color: black;
    color: white !important;
  }
}
</style>
