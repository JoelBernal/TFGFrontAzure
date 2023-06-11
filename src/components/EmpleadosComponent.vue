<template>
  <v-container fluid>
    <div id="tarjetas">
      <v-row no-gutters>
        <v-col
          class="columnas"
          style="padding-left: 20px"
          v-for="item in empleados"
          :key="item.id"
          cols="12"
          sm="4"
        >
          <v-card
            id="tarjeta"
            style="margin-bottom: 30px"
            class="mx-auto"
            max-width="400"
            width ="400px"
            tile
          >
            <v-img
              class="align-end text-white"
              height="200"
              :src="item.image"
              cover
            >
              <img
                src="https://media.gettyimages.com/id/1269367984/es/v%C3%ADdeo/mujer-comprando-libros-en-una-tienda-durante-la-pandemia.jpg?s=640x640&k=20&c=0lUTyfWVd31dzKoJuBQsFH0zuQwdPv4JVcYxB4TP6Qs="
                alt="foto cliente"
              />
              <v-card-title
                >{{ item.nombre }} {{ item.apellidos }}</v-card-title
              >
            </v-img>
            <v-card-subtitle class="pt-4">DNI: {{ item.dni }}</v-card-subtitle>
            <v-card-subtitle class="pt-4"
              >Correo: {{ item.correo }}</v-card-subtitle
            >
            <v-card-subtitle class="pt-4"
              >Residencia: {{ item.residencia }}</v-card-subtitle
            >
            <v-card-subtitle class="pt-4"
              >IdTiendaTrabajador: {{ item.tiendaId }}</v-card-subtitle
            >

            <v-card-actions>
              <v-btn color="red" @click="deleteCliente(item.id)"
                >Eliminar Empleado</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import store from "@/store/store.js";
import { mapState, mapActions } from "vuex";

export default {
  name: "EmpleadosComponent",
  components: {},

  data() {
    return {
      dialog: false,
    };
  },

  methods: {
    ...mapActions([store.dispatch("fetchEmpleados")]),
    ...mapActions(["eliminarEmpleado"]),

    //Borrar Cliente
    deleteCliente(id) {
      this.$store
        .dispatch("eliminarEmpleado", id)
        .then(() => {
          // Aquí puedes realizar alguna acción adicional después de eliminar el libro, si es necesario
          console.log("Cliente eliminado con éxito");
        })
        .catch((error) => {
          // Manejo de errores en caso de que ocurra algún problema al eliminar el libro
          console.error("Error al eliminar el cliente:", error);
        });
    },
  },
  computed: {
    user() {
      return this.cliente;
    },
    ...mapState(["empleados"]),
  },
};
</script>

<style>
@media screen and (max-width: 450px) {
  .v-card__subtitle {
    font-size: 14px;
  }

  .v-card__text div {
    font-size: 12px;
  }
}


@media (min-width: 600px) {
  .col-sm-4 {
    max-width: auto !important;
  }
}

@media (min-width: 600px) {
  .col-sm-4 {
    flex: 0 0 33.3333333333%;
    max-width: 100% !important;
  }
}

.row {
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 auto;
  margin: -12px;
  justify-content: center;
}

.col-sm-4 col-12 {
  max-width: auto;
}

#tarjetas {
  /* margin-right: 200px; */
}

#orden {
  margin: 60px;
  margin-bottom: 50px;
}

.botonOrden {
  margin-bottom: 30px;
}

.v-btn__content {
}

.v-card__actions {
  display: flex;
  justify-content: center;
}

.theme--light.v-btn {
  color: white;
}

@media (max-width: 450px) {
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
</style>
