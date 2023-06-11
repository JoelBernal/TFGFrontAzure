<template>
  <v-container fluid>
    <div class="filtro">
      <v-text-field
        v-model="searchQuery"
        label="Buscar tiendas"
        filled
        solo
        dense
        append-icon="mdi-magnify"
        @click:append="buscarTienda"
        class="search-bar"
        @input="buscarTienda"
      ></v-text-field>
    </div>

    <div>
      <v-row no-gutters>
        <v-col
          style="padding-left: 20px"
          v-for="item in tiendasCards"
          :key="item.id"
          cols="12"
          sm="4"
        >
          <v-card
            id="tarjeta"
            style="margin-bottom: 30px; border: 2px solid black"
            class="mx-auto"
            max-width="400"
            width="400px"
            tile
          >
            <v-card-title>{{ item.comunidad }}</v-card-title>

            <v-card-text>
              <div class="item-info">
                <div class="item-label">Comunidad:</div>
                <div class="item-value">{{ item.comunidad }}</div>
              </div>
              <div class="item-info">
                <div class="item-label">Localidad:</div>
                <div class="item-value">{{ item.localidad }}</div>
              </div>
              <div class="item-info">
                <div class="item-label">Calle:</div>
                <div class="item-value">{{ item.calle }}</div>
              </div>
              <div class="item-info">
                <div class="item-label">Código Postal:</div>
                <div class="item-value">{{ item.codigoPostal }}</div>
              </div>
              <div class="item-info">
                <div class="item-label">Trabajadores:</div>
                <div class="item-value">{{ item.trabajadores }}</div>
              </div>
              <div class="item-info">
                <div class="item-label">Horario de Atención:</div>
                <div class="item-value">{{ item.horarioAtencion }}</div>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "TiendasAdminComponent",
  components: {},

  data() {
    return {
      searchQuery: "",
      tiendasCards: [],
    };
  },

  methods: {
    ...mapActions(["fetchTiendas"]),
    ...mapActions(["eliminarTienda"]),
    ...mapActions(["agregarTienda"]),
    ...mapActions(["verTienda"]),
    ...mapActions(["filterTiendas"]),

    async buscarTienda() {
      this.tiendasCards = await this.filterTiendas(this.searchQuery);
      console.log(this.tiendasCards);
    },

    // Borrar Tienda
    deleteTienda(id) {
      this.eliminarTienda(id);
    },
  },

  computed: {
    user() {
      return this.tiendas;
    },
    ...mapState(["tienda"]),
  },

  created() {
    this.fetchTiendas();
  },

  mounted() {
    this.buscarTienda();
  },

  watch: {
    tienda() {
      this.buscarTienda();
      console.log(this.tiendas);
    },
  },
};
</script>

<style scoped>
.item-info {
  display: flex;
  margin-bottom: 8px;
}

.item-label {
  font-weight: bold;
  margin-right: 4px;
}

.item-value {
  flex: 1;
}
.filtro {
  display: flex; 
  align-items: center
}

@media screen and (max-width: 400px) {
}
@media (max-width: 1280px) {
  .v-row {
    cols: 6 !important;
  }
}

@media (max-width: 540px) {
  #tarjeta {
    width: 300px !important;
  }
  .columnaTarjeta {
    padding-left: 0px !important;
  }
  .menuProductos {
    margin-left: 0px !important;
  }
}

@media (max-width: 1600px) {
  .filtro {
    margin-left: 50px;
  }
}
@media (max-width: 1263px) {
  .filtro {
    margin-left: 0px !important;
  }

}

</style>
