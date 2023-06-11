<template>
  <div>
      <h3 style="text-align: center; margin-bottom: 20px; margin-top: 20px;">Información de Pago</h3>
      <div class="payment-form">
        <div style="display: flex; align-items: center; justify-content: center; margin-bottom: 20px;">
          <img style="width: 350px; height: 200px;" src="https://www.pngall.com/wp-content/uploads/2/Black-Credit-Card-PNG-Image.png" alt="">
        </div>
        <form @submit.prevent="submitPayment">
          <div class="form-group">
            <label for="cardName">Nombre en la tarjeta</label>
            <input id="cardName" v-model="cardName" type="text" required class="input-field">
          </div>
          <div class="form-group">
            <label for="cardNumber">Número de tarjeta</label>
            <input id="cardNumber" v-model="cardNumber" type="text" pattern="^[0-9]{16}$" required class="input-field">
          </div>
          <div class="form-group">
            <label for="expiryDate">Fecha de vencimiento</label>
            <input id="expiryDate" v-model="expiryDate" type="text" pattern="^(0[1-9]|1[0-2])/([0-9]{4}|[0-9]{2})$" required class="input-field">
          </div>
          <div class="form-group">
            <label for="cvv">CVV</label>
            <input id="cvv" v-model="cvv" type="text" pattern="^[0-9]{3,4}$" required class="input-field">
          </div>
          <button type="submit" class="pay-button" @click="IrGracias()">Pagar</button>
        </form>
      </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  data() {
    return {
      cardName: '',
      cardNumber: '',
      expiryDate: '',
      cvv: '',
    };
  },
  methods: {
    ...mapMutations([
      'clearCart' 
    ]),
    async IrGracias() {
      if(this.isValid()) {
        await this.$store.dispatch('submitOrder');
        this.clearCart();
        this.$router.push('/Gracias');
      } else {
        alert("Por favor, verifique que todos los campos son correctos.");
      }
    },
    isValid() {
      const regexCardNumber = new RegExp('^[0-9]{16}$');
      const regexExpiryDate = new RegExp('^(0[1-9]|1[0-2])/([0-9]{4}|[0-9]{2})$');
      const regexCvv = new RegExp('^[0-9]{3,4}$');

      return regexCardNumber.test(this.cardNumber) && 
        regexExpiryDate.test(this.expiryDate) && 
        regexCvv.test(this.cvv) && 
        this.cardName.length > 0;
    }
  },
};
</script>



<style scoped>
.payment-form {
  padding: 5%;
  max-width: 600px;
  margin: auto;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: aliceblue;
}

.input-field {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.pay-button {
  width: 100%;
  padding: 15px;
  background-color: #80461b;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
}

.pay-button:hover {
  background-color: #643716;
}
</style>
