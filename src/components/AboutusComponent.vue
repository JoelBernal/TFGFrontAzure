<template>
  <div style="width: 100%">
    <v-container style="margin-top: 55px">
      <div>
        <v-row>
          <v-col class="text-center">
            <h1 id="Titulo">Acerca de nosotros</h1>
          </v-col>
        </v-row>

        <div class="menuAboutUs">
          <v-row justify="center" style="margin-bottom: 20px; padding: 60px">
            <v-col md="4">
              <v-img :src="aboutUsImage" max-height="500" contain></v-img>
            </v-col>

            <v-col md="8">
              <p>
                <b>
                  Bienvenido a nuestra librería, donde cada página te lleva a un
                  viaje inolvidable. Fundada hace más de una década, hemos
                  trabajado incansablemente para proporcionar a nuestros
                  lectores acceso a miles de libros de calidad y a una amplia
                  gama de géneros. En nuestra librería, creemos que cada libro
                  tiene una historia única que contar y que cada lector tiene su
                  propio libro destinado a ser descubierto. Hemos alimentado las
                  mentes y los corazones de los lectores durante años y nos
                  sentimos honrados de seguir siendo el destino preferido para
                  los entusiastas de los libros. Como una librería de renombre,
                  entendemos el valor de la calidad. Por eso, nos esforzamos en
                  proporcionar no solo una amplia selección de libros, sino
                  también un excelente servicio al cliente. Nuestro personal
                  amable y bien informado está siempre dispuesto a ayudarte a
                  encontrar tu próximo libro favorito o a responder cualquier
                  pregunta que puedas tener. Pero nuestra librería es más que
                  solo un lugar para comprar libros. Es un punto de encuentro
                  para los amantes de los libros, un lugar donde se pueden
                  compartir ideas y descubrir nuevas perspectivas. Ya sea que
                  estés buscando la última novela de ficción, una guía de
                  autoayuda inspiradora, un libro de cocina tentador o un
                  misterio emocionante, lo encontrarás aquí. Te invitamos a
                  explorar nuestra librería, a sumergirte en las páginas de un
                  libro y a descubrir el placer de la lectura. En cada estante,
                  en cada esquina, hay una aventura esperando. Estamos aquí para
                  ayudarte a encontrarla. Gracias por elegirnos como tu librería
                  de confianza. ¡Esperamos verte pronto!
                </b>
              </p>
            </v-col>
          </v-row>
        </div>
        <hr style="height: 5px; background-color: black" />
      </div>

      <!-- Sección del equipo -->
      <v-row justify="center" style="margin-top: 20px">
        <v-col class="text-center">
          <h2 id="Titulo">Nuestro equipo</h2>
        </v-col>
      </v-row>

      <v-row justify="center">
        <!-- Ejemplo de tarjeta de miembro del equipo -->
        <v-col md="4" class="text-center">
          <v-card>
            <v-img
              src="https://media.licdn.com/dms/image/D4D03AQGw_mw1p256pQ/profile-displayphoto-shrink_200_200/0/1675976747834?e=1691625600&v=beta&t=Ca4OLYL7zBdoKNVLi-RVtYRPIYKJHxFEF2y5TvRy8JQ"
              height="200px"
            ></v-img>
            <v-card-text>
              <h4>Enrique Begué Aguirre</h4>
              <p>CEO</p>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col md="4" class="text-center">
          <v-card>
            <v-img
              src="https://media.licdn.com/dms/image/D4D03AQG8cpmgvkE9Hg/profile-displayphoto-shrink_800_800/0/1686326784900?e=2147483647&v=beta&t=OPAQGzY9kXDAE06Ine5fmSbh-_jcWv8mlrQGmTg5n0A"
              height="200px"
            ></v-img>
            <v-card-text>
              <h4>Joel Bernal Jimeno</h4>
              <p>CEO</p>
            </v-card-text>
          </v-card>
        </v-col>
        <!-- Agrega más tarjetas para más miembros del equipo -->
      </v-row>

      <!-- Sección de testimonios -->
      <v-row justify="center" style="margin-top: 60px">
        <v-col class="text-center">
          <h2 id="Titulo">Testimonios</h2>
        </v-col>
      </v-row>

      <v-row justify="center" style="margin-left: 20px; margin-right: 20px">
        <!-- Ejemplo de tarjeta de testimonio -->
        <v-col md="4" class="text-center">
          <v-card>
            <v-card-text>
              "Esta es la mejor página que he visto en mi vida"
              <p>- Joaquín Ruiz</p>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col md="4" class="text-center">
          <v-card>
            <v-card-text>
              "¡Que gran catálogo de libros tiene Librerías Paco!"
              <p>- Oliver Hierro</p>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col md="4" class="text-center">
          <v-card>
            <v-card-text>
              "¡Yo fui quien les dijo que hicieran debug!"
              <p>- Alejandro Gimenez</p>
            </v-card-text>
          </v-card>
        </v-col>

        <!-- Agrega más tarjetas para más testimonios -->
      </v-row>

      <!-- Sección de contacto -->
    </v-container>
  </div>
</template>

<script>
export default {
  name: "AboutUsComponent",
  components: {},
  data() {
    return {
      aboutUsImage:
        "https://i.pinimg.com/originals/7a/11/f5/7a11f5274c6de6f11292725c5a7458a7.jpg",
    };
  },
};
</script>

<style>

#Titulo {
  text-align: center;
  color: #333;
  font-size: 48px;
  font-family: "Arial", sans-serif;
  text-shadow: 2px 2px 4px rgba(1, 9, 10, 0.7);
  padding: 10px;
}
.about-us {
  font-family: Arial, sans-serif;
}

.heading {
  font-size: 2em;
  color: #333;
}

.about-us-image {
  margin-bottom: 20px;
}

.about-us-text {
  text-align: justify;
  line-height: 1.6;
  color: #333;
  margin-right: 50px;
  font-weight: bold;
}

@media (max-width: 1100px) {
  .menuAboutUs {
    
  }

  .justify-center {
    display: flex;
    flex-direction: column;
  }

}

/* Añade más estilos según sea necesario... */
</style>
