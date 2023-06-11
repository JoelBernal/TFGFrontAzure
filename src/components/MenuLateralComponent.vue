<template>
  <v-app class="menuDiv">
    <div
      :class="{ hidden: windowWidth < 1265 }"
      ref="menu"
      style="position: fixed; height: 100vh"
    >
      <v-list dense nav style="height: 100%; width: 250px; padding: 20px 10px;">
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
            <v-list-item-title class="mandangon">{{
              item.title
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <div
        style="display: flex; justify-content: center; margin-bottom: 20px"
      ></div>
    </div>
    <v-btn class="botonLateral" icon @click="toggleMenu"
      ><i class="bi bi-three-dots"></i
    ></v-btn>
  </v-app>
</template>

<script>
import store from "@/store/store.js";
import { mapState, mapActions } from "vuex";

export default {
  name: "MenuLateralComponent",
  data: () => ({
    items: [
      { title: "Libros", icon: "mdi-book", href: "/products" },
      { title: "Tiendas", icon: "mdi-view-dashboard", href: "/tiendas" },
      { title: "Ajustes", icon: "mdi-cog", href: "/InfoUsuario" },
    ],
  }),
  components: {},

  methods: {
    toggleMenu() {
      this.$refs.menu.classList.toggle("hidden");
    },
    ...mapActions([store.dispatch("fetchOrdenarLibros")]),
    redirectToFormLibro() {
      this.$router.push("/formLibro");
    },
    redirectToFormTienda() {
      this.$router.push("/formTienda");
    },
  },

  computed: {
    user() {
      return this.libro;
    },
    ...mapState(["libro"]),
  },
};
</script>

<style>
#orden {
  background-color: #80461b;
  color: #fff;
  border: none;
  padding: 15px 40px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border-radius: 10px;
}

#orden:hover {
  background-color: #5e3414;
}

#orden:active {
  transform: scale(0.9);
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
